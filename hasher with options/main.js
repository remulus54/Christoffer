function handleSubmit() {
  var selectedOption = document.getElementById("hash_type").value;
  var inputText = document.getElementById("inputText").value;

  if (selectedOption === "" || inputText === "") {
     alert("Error: Please enter a password and select a hash type.");
    return;
  }

  if (selectedOption === "MD5") {
     console.log("MD5");

    var password = inputText;
    var hashedPassword = hashPassword1(password);
    alert(hashedPassword);
    copyToClipboard(hashedPassword);
  }

  if (selectedOption === "SHA-1") {
     console.log("SHA-1");

    var password = inputText;
    hashPassword2(password)
      .then(hashedPassword => {
        alert(hashedPassword);
        copyToClipboard(hashedPassword);
      })
      .catch(error => {
        console.error(error);
      });
  }

  if (selectedOption === "SHA-256") {
     console.log("SHA-256");

    var password = inputText;
    hashPassword3(password)
      .then(hashedPassword => {
        alert(hashedPassword);
        copyToClipboard(hashedPassword);
      })
      .catch(error => {
        console.error(error);
      });
  }

  if (selectedOption === "SHA-384") {
     console.log("SHA-384");

    var password = inputText;
    hashPassword4(password)
      .then(hashedPassword => {
        alert(hashedPassword);
        copyToClipboard(hashedPassword);
      })
      .catch(error => {
        console.error(error);
      });
  }

  if (selectedOption === "SHA-512") {
     console.log("SHA-512");

    var password = inputText;
    hashPassword5(password)
      .then(hashedPassword => {
        alert(hashedPassword);
        copyToClipboard(hashedPassword);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

function hashPassword1(password) {
  var hashedPassword = CryptoJS.MD5(password).toString();
  return hashedPassword;
}

async function hashPassword2(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
  return hashedPassword;
}

async function hashPassword3(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
  return hashedPassword;
}

async function hashPassword4(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-384", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
  return hashedPassword;
}

async function hashPassword5(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-512", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
  return hashedPassword;
}

function copyToClipboard(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

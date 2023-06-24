document.getElementById("submit").addEventListener("click", convertCurrency);

function convertCurrency() {
  let inputValue = document.getElementById("number").value;
  let fromCurrency = document.getElementById("valutaChooseFrom").value;
  let toCurrency = document.getElementById("valutaChooseTo").value;
  let converted;

  if (inputValue == 0) {
    console.error("Please type a number over or under 0");
    alert("Please type a number over or under 0");
    //window.confirm("Please type a number over or under 0?");
    return;
  }

  if (fromCurrency === toCurrency) {
    alert("You can't connvert the unit to the same unit!!!")
    return;
  } else {
    if (fromCurrency === "lysår" && toCurrency === "au") {
      converted = inputValue * 63241.1;


    } else if (fromCurrency === "lysår" && toCurrency === "m") {
      


      //makes the text smaller if it is to big

      if (inputValue > 999999) {
        converted = (BigInt(9460730472580800n) * BigInt(inputValue)) * BigInt(1000n);

        console.log(converted);

        let myDiv = document.getElementById("output");

      
        
        myDiv.style.fontSize = "28px";
        myDiv.style.left = "40px";
        
        document.getElementById("output").innerHTML = `${converted} ${toCurrency}`
        
        return;
      }


      //converts the 2 inputs
      converted = BigInt(9460730472580800n) * BigInt(inputValue) * BigInt(1000n);

      ////////////////console.log(converted);

      let myDiv = document.getElementById("output");

    
      
      //sets the CSS styles using js
      myDiv.style.fontSize = "40px";
      myDiv.style.left = "40px";
      
      //write the text in the document
      document.getElementById("output").innerHTML = `${converted} ${toCurrency}`
      
      
    }


    else if (fromCurrency === "au" && toCurrency === "m") {
      


      //makes the text smaller if it is to big

      if (inputValue > 9999999999999 || inputValue < -9999999999999) {
        converted = (BigInt(149597871n) * BigInt(inputValue)) * BigInt(1000n);

        ///////////////console.log(converted);

        let myDiv = document.getElementById("output");

      
        
        myDiv.style.fontSize = "28px";
        myDiv.style.left = "40px";
        
        document.getElementById("output").innerHTML = `${converted} ${toCurrency}`
        
        return;
      }


      //converts the 2 inputs
      converted = BigInt(149597871n) * BigInt(inputValue) * BigInt(1000n);

      ///////////////////console.log(converted);

      let myDiv = document.getElementById("output");

    
      
      //sets the CSS styles using js
      myDiv.style.fontSize = "40px";
      myDiv.style.left = "40px";
      
      //write the text in the document
      document.getElementById("output").innerHTML = `${converted} ${toCurrency}`
      
      
    }
    
    


    else if (fromCurrency === "au" && toCurrency === "km") {
      


      //makes the text smaller if it is to big

      if (inputValue > 999999999) {
        converted = BigInt(149597871n) * BigInt(inputValue);

        ///////////////console.log(converted);

        let myDiv = document.getElementById("output");

      
        
        myDiv.style.fontSize = "28px";
        myDiv.style.left = "40px";
        
        document.getElementById("output").innerHTML = `${converted} ${toCurrency}`
        
        return;
      }


      //converts the 2 inputs
      converted = BigInt(149597871n) * BigInt(inputValue);

      /////////////////console.log(converted);

      let myDiv = document.getElementById("output");

    
      
      //sets the CSS styles using js
      myDiv.style.fontSize = "50px";
      myDiv.style.left = "50px";
      
      //write the text in the document
      document.getElementById("output").innerHTML = `${converted} ${toCurrency}`
      
      
    }
    
    
    
    
    
    
    
    
    else if (fromCurrency === "au" && toCurrency === "lysår") {
      converted = inputValue / 63241.1;
    } else if (fromCurrency === "mm" && toCurrency === "m") {
      converted = inputValue / 1000;
    } else if (fromCurrency === "m" && toCurrency === "mm") {
      converted = inputValue * 1000;
    } else if (fromCurrency === "cm" && toCurrency === "m") {
      converted = inputValue / 100;
    } else if (fromCurrency === "m" && toCurrency === "cm") {
      converted = inputValue * 100;
    } else if (fromCurrency === "cm" && toCurrency === "mm") {
      converted = inputValue * 10;
    } else if (fromCurrency === "mm" && toCurrency === "cm") {
      converted = inputValue / 10;
    } else if (fromCurrency === "km" && toCurrency === "m") {
      converted = inputValue * 1000;
    } else if (fromCurrency === "m" && toCurrency === "km") {
      converted = inputValue / 1000;
    } else if (fromCurrency === "kg" && toCurrency === "g") {
      converted = inputValue * 1000;
    } else if (fromCurrency === "g" && toCurrency === "kg") {
      converted = inputValue / 1000;
    }
    
    
    
    else if (fromCurrency === "dl" && toCurrency === "L") {
      converted = inputValue / 10;
    } else if (fromCurrency === "ml" && toCurrency === "L") {
      converted = inputValue / 1000;
    } else if (fromCurrency === "centi-liter" && toCurrency === "L") {
      converted = inputValue / 100;
    } else if (fromCurrency === "L" && toCurrency === "ml") {
      converted = inputValue * 1000;
    } else if (fromCurrency === "L" && toCurrency === "dl") {
      converted = inputValue * 10;
    } else if (fromCurrency === "L" && toCurrency === "centi-liter") {
      converted = inputValue * 100;
    } else if (fromCurrency === "centi-liter" && toCurrency === "dl") {
      converted = inputValue / 10;
    } else if (fromCurrency === "centi-liter" && toCurrency === "ml") {
      converted = inputValue * 10;
    } else if (fromCurrency === "ml" && toCurrency === "dl") {
      converted = inputValue / 100;
    } else if (fromCurrency === "ml" && toCurrency === "centi-liter") {
      converted = inputValue / 10;
    } else if (fromCurrency === "dl" && toCurrency === "ml") {
      converted = inputValue * 100;
    } else if (fromCurrency === "dl" && toCurrency === "centi-liter") {
      converted = inputValue * 10;
    } else if (fromCurrency === "lysår" && toCurrency === "km") {
      

      //makes the text smaller if it is to big
      if (inputValue > 999999) {
        converted = BigInt(9460730472580800n) * BigInt(inputValue);

        /////////////////////////console.log(converted);

        let myDiv = document.getElementById("output");

      
        
        myDiv.style.fontSize = "28px";
        myDiv.style.left = "40px";
        
        document.getElementById("output").innerHTML = `${converted} ${toCurrency}`
        
        return;
      }


      //converts the 2 inputs
      converted = BigInt(9460730472580800n) * BigInt(inputValue);

      ///////////////////console.log(converted);

      let myDiv = document.getElementById("output");

    
      
      //sets the CSS styles using js
      myDiv.style.fontSize = "40px";
      myDiv.style.left = "40px";
      
      //write the text in the document
      document.getElementById("output").innerHTML = `${converted} ${toCurrency}`
      
      return;
    }




    
    
    else {
      alert("This Convertion is not supported, in this program");
      return;
    }
  }

  document.getElementById("output").innerHTML = `${converted} ${toCurrency}`;

  console.log("done");
}

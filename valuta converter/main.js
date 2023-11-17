document.getElementById("submit").addEventListener("click", convertCurrency);

function convertCurrency() {
  // gets the input value
  let inputValue = document.getElementById("number").value;

  console.log("input: " + inputValue);

  // get the currency codes from the select elements
  let fromCurrency = document.getElementById("valutaChooseFrom").value;
  let toCurrency = document.getElementById("valutaChooseTo").value;

  var converted;

  

  




    if (inputValue == 0) {
        console.error("Please type a number over or under 0");
    }








  // do the currency conversion

  if (fromCurrency === "DKK" && toCurrency === "DKK") {
    converted = "You Cant convert DKK to DKK";
    

  }


  if (fromCurrency === "DKK" && toCurrency === "euro") {
    converted = inputValue / 7.46;
    
  }


  if (fromCurrency === "DKK" && toCurrency === "dollars") {
    converted = inputValue / 6.84;
    
  }
  


  if (fromCurrency === "euro" && toCurrency === "DKK") {
    converted = inputValue * 7.46;
   
  }



  if (fromCurrency === "euro" && toCurrency === "euro") {
    converted = "You Cant convert euro to euro";
    
  }


  if (fromCurrency === "euro" && toCurrency === "dollars") {
    converted = inputValue * 1.09;
    
  }



  if (fromCurrency === "dollars" && toCurrency === "DKK") {
    converted = inputValue * 6.84;
    
  }



  if (fromCurrency === "dollars" && toCurrency === "dollars") {
    converted = "You Cant convert dollars to dollars";
    
  }


  if (fromCurrency === "dollars" && toCurrency === "euro") {
    converted = inputValue * 0.92;
    


    
    
  }


  
  console.log("converted number: " + converted);


  var result = (converted).toFixed(2)

  console.log("round with 2 decimals: " + result);

  print();




  function print() {

    document.getElementById("output").innerHTML = result;

    var localStorage = window.localStorage;

    localStorage.setItem("result", result);
  }

  
  


  


}


var  localStorageing = setInterval(function(){

  var localStorage = window.localStorage;
  
  result = parseFloat(localStorage.result).toFixed(2);

  document.getElementById("output").innerHTML = result;



},100)

document.getElementById("number").addEventListener("keyup", function(event) {

  event.preventDefault();


  //keycode 13 = enter
  if (event.keyCode === 13) {
    document.getElementById("submit").click();
  }

});



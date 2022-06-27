
/* Define Variables and Functions */
let currencyNameArr = ["USD","JPY","EUR","RUB","GBP"];
let currencyAmtArr = [1, 113.5, 0.89, 74.36, 0.75];

/* Initiate Program */
console.log("Welcome to Currency Converter!");
console.log("1 USD equals  1 USD");
console.log("1 USD equals  113.5 JPY");
console.log("1 USD equals  0.89 EUR");
console.log("1 USD equals  74.36 RUB");
console.log("1 USD equals  0.75 GBP");

/* ******************************************************************* */
const input = require('sync-input');

let isExit = false;
do {
  
  /* Determine if user wants to use the program */
  let isValidResponse = false;
  let statusResponse = 0;
  do {
    
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    
    statusResponse = input("")
    
    if(isNaN(statusResponse)){
      console.log("Unknown input");
    }
    else{
      
        statusResponse = Number(statusResponse);
      
      if(statusResponse != 1 && statusResponse != 2){
        console.log("Unknown input");
        continue;
      }
      isValidResponse = true;
    }
    
  } while(!isValidResponse);
  
  
  if(statusResponse == 2){
    console.log("Have a nice day!");
    isExit = true;
    continue;
  }
  
  /*Program was not exited, continue*/
  
  // Use this function to validate if currency
  // is found in the currency list 
  let isCurrency = function(currency,currencyArr){
    return currencyArr.includes( currency.toUpperCase() )
  }

  console.log("What do you want to convert?");
  let inputFromCurrency = input("From:");

  if( !isCurrency(inputFromCurrency, currencyNameArr) ){
    console.log("Unknown currency");
  }
  else{
	 
    let inputToCurrency = input("To:");

    if( !isCurrency(inputToCurrency, currencyNameArr) ){
      console.log("Unknown currency");
    }
    else {
      
      let inputAmount = input("Amount:");
      
      if(isNaN(inputAmount)){
        console.log("The amount has to be a number");
      }
      else if(Number(inputAmount) < 1){
        console.log("The amount can not be less than 1");
      }
      else{
		 /* Calculate the conversion */
        let amount = Number(inputAmount);
        let fromCurrency = inputFromCurrency.toUpperCase()
        let toCurrency = inputToCurrency.toUpperCase()
        
        if(fromCurrency == toCurrency){
          console.log(`Result: ${amount} ${fromCurrency} equals ${amount.toFixed(4)} ${fromCurrency}`);
        }
        else{
          let idxFrom = currencyNameArr.indexOf(fromCurrency);
          let idxTo = currencyNameArr.indexOf(toCurrency);
          
          let convertedAmount = (amount / currencyAmtArr[idxFrom]) * currencyAmtArr[idxTo];
          
          console.log(`Result: ${amount} ${fromCurrency} equals ${convertedAmount.toFixed(4)} ${toCurrency}`);        
        }
      }
    }  
    
  }
} while(!isExit);







// Change Calculator
// We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

// Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

// Valid denominations are as follows:

// Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)
// JS
// let calculateChange = function(total, cash) {
//   // Your code here
// };

// console.log(calculateChange(1787, 2000));
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));
// Expected Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

const moneyValue = {
  "Twenty dollars": 2000,
  "Ten dollars": 1000,
  "Five dollars": 500,
  "Two dollars": 200,
  "One dollars": 100,
  "Quarter": 25,
  "Dime": 10,
  "Nickel": 5,
  "Penny": 1
};


const calculateChange = function(total, cash) {
  let finalChange = [];
  let change = cash - total;
  if (change === 0) {
    return "Do Not Need changes";
  }
  if (change < 0) {
    return "Do Not Pay enough Money";
  }
  if (change % moneyValue['Twenty dollars'] > 0) {
    let numberOfTwenty = Math.floor(change % moneyValue['Twenty dollars']);
    change = change - (change * numberOfTwenty);
    finalChange["TwentyDollars"] = numberOfTwenty;
  }
  if (change % moneyValue['Ten dollars'] > 0) {
    let numberOfTen = Math.floor(change % moneyValue['Ten dollars']);
    change = change - (change * numberOfTen);
    finalChange["TenDollars"] = numberOfTen;
  }
  if (change % moneyValue['Five dollars'] > 0) {
    let numberOfFive = Math.floor(change % moneyValue['Five dollars']);
    change = change - (change * numberOfFive);
    finalChange["FiveDollars"] = numberOfFive;
  }
  if (change % moneyValue['Two dollars'] > 0) {
    let numberOfTwo = Math.floor(change % moneyValue['Two dollars']);
    change = change - (change * numberOfTwo);
    finalChange["TwoDollars"] = numberOfTwo;
  }
  if (change % moneyValue['One dollars'] > 0) {
    let numberOfOne = Math.floor(change % moneyValue['One dollars']);
    change = change - (change * numberOfOne);
    finalChange["OneDollars"] = numberOfOne;
  }
  if (change % moneyValue['Quarter dollars'] > 0) {
    let numberOfQuarter = Math.floor(change % moneyValue['Quarter dollars']);
    change = change - (change * numberOfQuarter);
    finalChange["QuarterDollars"] = numberOfQuarter;
  }
  if (change % moneyValue['Dime dollars'] > 0) {
    let numberOfDime = Math.floor(change % moneyValue['Dime dollars']);
    change = change - (change * numberOfDime);
    finalChange["DimeDollars"] = numberOfDime;
  }
  if (change % moneyValue['Nickel dollars'] > 0) {
    let numberOfNickel = Math.floor(change % moneyValue['Nickel dollars']);
    change = change - (change * numberOfNickel);
    finalChange["NickelDollars"] = numberOfNickel;
  }
  if (change % moneyValue['Penny dollars'] > 0) {
    let numberOfPenny = Math.floor(change % moneyValue['Penny dollars']);
    change = change - (change * numberOfPenny);
    finalChange["PennyDollars"] = numberOfPenny;
  }
  return finalChange;
};

console.log(calculateChange(1787, 2000));
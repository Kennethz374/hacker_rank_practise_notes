
//  Function Description

// Complete the getMoneySpent function in the editor below. It should return 
// the maximum total price for the two items within Monica's budget, or  
// if she cannot afford both items.

// getMoneySpent has the following parameter(s):

// keyboards: an array of integers representing keyboard prices
// drives: an array of integers representing drive prices
// b: the units of currency in Monica's budget
// Input Format

// The first line contains three space-separated integers , , and , her budget, the number of 
// keyboard models and the number of USB drive models.
// The second line contains  space-separated integers , the prices of each keyboard model.
// The third line contains  space-separated integers , the prices of the USB drives.

// Constraints

// The price of each item is in the inclusive range .
// Output Format

// Print a single integer denoting the amount of money Monica will spend. 
// If she doesn't have enough money to buy one keyboard and one USB drive, print -1 instead.

// sample input b = 10  keyboard = [3,1] usb = [5,2,8]
//sample output should be 9,

// sudo code: set a variable as a highest combination and the combination has to be smaller than budget. 
// compare each combination with a loop

const getMoneySpent = (budget, usb, keyboard) => {
  let highestCombination = -1;
  for (let priceOfUsb of usb) {
    for (let priceOfKeyboard of keyboard) {
      let combination = priceOfKeyboard + priceOfUsb;
      if (combination > highestCombination && combination <= budget) {
        highestCombination = combination;
      }
    }
  }
  return highestCombination;
}
const b = 10;
const n = [5, 2, 8];
const m = [3, 1];

console.log(getMoneySpent(b,n,m)) // output = 9
console.log(getMoneySpent(10,[12],[13])) //output = -1
console.log(getMoneySpent(20,[21],[22]))
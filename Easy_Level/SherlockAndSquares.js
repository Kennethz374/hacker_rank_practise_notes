// Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

// Note: A square integer is an integer which is the square of an integer, e.g. .

// Example

// There are three square integers in the range:  and . Return .

const s = 10;
const e = 1000;

const a = 3;
const b = 9;

const squares = (a, b) => {
  // let ans = 0;
  // for (let i = a; i <= b; i++) {
  //   if (Number.isInteger(Math.sqrt(i))) {
  //     ans += 1;
  //   }
  // }
  // return ans;

  let highestInt = Math.floor(Math.sqrt(b));
  let lowestInt = Math.ceil(Math.sqrt(a));
  console.log(highestInt, lowestInt);
  let ans = highestInt - lowestInt;
  if (Number.isInteger(Math.sqrt(b))) {
    ans += 1;
  }
  if (Number.isInteger(Math.sqrt(a))) {
    ans += 1;
  }
  if (ans <= 0) {
    return 0;
  }

  return ans;
  // if (a) {
  //   return ans;
  // } else {
  //   return 0;
  // }
};

console.log(squares(s, e));
console.log(squares(a, b));

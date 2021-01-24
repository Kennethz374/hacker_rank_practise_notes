// Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

// Note: A square integer is an integer which is the square of an integer, e.g. .

// Example

// There are three square integers in the range:  and . Return .

const s = 10;
const e = 1000;

const a = 17;
const b = 24;

const squares = (a, b) => {
  let lowInt = Math.sqrt(a);
  let highInt = Math.floor(Math.sqrt(b));
  if (!Number.isInteger(lowInt)){
    let upOrDown = Math.floor(lowInt) * Math.floor(lowInt)
    if (a > upOrDown) {
      lowInt = Math.floor(lowInt) + 1;
    } else {
      lowInt = Math.floor(lowInt)
    }
  }
  if (lowInt > highInt) {
    return 0
  } else {
    return highInt - lowInt +1;
  }

}
};

console.log(squares(s, e));
console.log(squares(a, b));

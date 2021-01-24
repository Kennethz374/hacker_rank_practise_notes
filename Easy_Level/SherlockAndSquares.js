// Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

// Note: A square integer is an integer which is the square of an integer, e.g. .

// Example

// There are three square integers in the range:  and . Return .

const s = 3;
const e = 9;

const squares = (a, b) => {
  let ans = 0;
  for (let i = a; i <= b; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      ans += 1;
    }
  }
  return ans;
};

squares(s, e);

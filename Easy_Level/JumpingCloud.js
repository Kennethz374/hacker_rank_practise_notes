let s = [0, 0, 1, 0, 0, 1, 0];
let s1 = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0];
let s2 = [0, 0, 0];
let s3 = [0, 0];
let s4 = [0, 0, 0, 1, 0, 0];
let s5 = [
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  1,
  0,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0
];

const JumpingOnClouds = c => {
  let arr = [0];
  let num = 0;
  if (c.length === 2) {
    return 1;
  }
  for (let i = 1; i < c.length; i++) {
    if (c[i] === 0 && c[i + 1] === 0) {
      num += 2;
      i += 1;
      arr.push(num);
      continue;
    }
    if (c[i] === 0 && c[i + 1] === 1) {
      num += 1;
      arr.push(num);
      continue;
    }
    if (c[i] === 1 && c[i + 1] === 0) {
      num += 2;
      i += 1;
      arr.push(num);
      continue;
    }
  }
  console.log(arr, arr.length);
  if (
    c[c.length - 1] === 0 &&
    c[c.length - 2] === 0 &&
    c.length !== 3 &&
    c[c.length - 3] === 1
  ) {
    return arr.length;
  } else {
    return arr.length - 1;
  }
};

// console.log(JumpingOnClouds(s));
// console.log(JumpingOnClouds(s1));
// console.log(JumpingOnClouds(s2));
console.log(JumpingOnClouds(s5));

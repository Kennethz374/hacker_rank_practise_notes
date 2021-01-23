// Cut The Sticks//
//ex  ar = [1,2,3]
//find the shortest stick, remove it, and minus all other sticks with the shortest one's length
//first iteration ar = [1,2]   ===>  ar = [1]
//count the number of sticks left in each iteration
//which is ans = [3,2,1]

let ar = [5, 4, 4, 2, 2, 8];
let ans = ar.filter(a => a !== 4);

const CutTheStick = arr => {
  // let ans = [arr.length];
  // for (let i = arr.length; i >= 0; i--) {
  //   let min = Math.min(...arr);
  //   arr = arr.filter(x => x !== min);
  //   ans.push(arr.length);
  // }
  // return ans.filter(x => x !== 0);

  let ans = [arr.length];

  while (arr.length !== 0) {
    arr = arr.filter(x => x !== Math.min(...arr));
    if (arr.length !== 0) {
      ans.push(arr.length);
    }
  }
  return ans;
};

console.log(CutTheStick(ar));

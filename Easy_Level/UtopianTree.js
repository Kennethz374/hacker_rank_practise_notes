const utopianTree = (t, n) => {
  let height = 1;
  if (n === 0) {
    return height;
  }
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      height = height * 2;
    } else {
      height += 1;
    }
  }
  return height;
}

console.log(utopianTree(1,0))
console.log(utopianTree(1,1))
console.log(utopianTree(1,2))
console.log(utopianTree(1,3))
console.log(utopianTree(1,4))
console.log(utopianTree(1,5))
console.log(utopianTree(1,100))

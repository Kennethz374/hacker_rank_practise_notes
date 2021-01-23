function compareTriplets(a, b) {
  const result = [];
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice += 1;
    }
    if (a[i] < b[i]) {
      bob += 1;
    }
  }
  result.push(alice);
  result.push(bob);
  return result;
}

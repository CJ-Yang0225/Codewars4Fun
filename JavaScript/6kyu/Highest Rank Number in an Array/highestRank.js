/* My Solution */
function highestRank(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    // 同 counts[arr[i]] = ++counts[arr[i]] || 1;
    counts[arr[i]] = ~~counts[arr[i]] + 1;
  }

  return +Object.keys(counts).reduce((prev, curr) =>
    counts[curr] > counts[prev]
      ? curr
      : counts[curr] == counts[prev]
      ? Math.max(curr, prev)
      : prev
  );
}

/* Clever */
// function highestRank(arr) {
//   return arr.sort(
//     (a, b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length
//   )[0];
// }

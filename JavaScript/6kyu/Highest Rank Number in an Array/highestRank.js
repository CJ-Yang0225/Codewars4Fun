/* My Solution */
function highestRank(arr) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    // 同 count[arr[i]] = ++count[arr[i]] || 1;
    count[arr[i]] = ~~count[arr[i]] + 1;
  }

  return +Object.keys(count).reduce((prev, curr) =>
    count[curr] > count[prev]
      ? curr
      : count[curr] == count[prev]
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

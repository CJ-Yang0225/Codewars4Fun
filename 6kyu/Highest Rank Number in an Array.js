/* 
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
------------------------------------------------------------------------------*/

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

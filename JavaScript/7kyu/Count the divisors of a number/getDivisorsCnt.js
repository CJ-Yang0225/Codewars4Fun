/* 效率不佳 */
// function getDivisorsCnt(n) {
//   let countArray = [];

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       countArray.push(i);
//     }
//   }

//   return countArray.length;
// }

// 除了自己的最大公因數外，其他不會大於這個數的一半
function getDivisorsCnt(n) {
  let count = 1; // 自己
  for (i = 1; i <= n / 2; i++) {
    if (n % i === 0) count++;
  }

  return count;
}

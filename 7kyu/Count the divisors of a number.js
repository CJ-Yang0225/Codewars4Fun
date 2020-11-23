/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples
divisors(4)  = 3  // 1, 2, 4
divisors(5)  = 2  // 1, 5
divisors(12) = 6  // 1, 2, 3, 4, 6, 12
divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30 
------------------------------------------------------------------------------*/

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

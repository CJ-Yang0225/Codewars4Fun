/* 
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
  
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
  // 必須 abs()，否則 NaN。EX: (-32).toString().split(""); // ["-", "3", "2"]
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((prev, curr) => +prev + +curr, 0); // '+' converts the item to it's right to a Number
}

// function sumDigits(number) {
//     let answer = 0;
//     number = Math.abs(number);

//     while (number) {
//       answer += number % 10;
//       number = Math.floor(number / 10);
//     }

//     return answer;
//   }

// function sumDigits(number) {
//   return (
//     Math.abs(number)
//       .toString()
//       .split("")
//       .map(Number)
//       /* 同 map((value, index, array) => Number(value, index, array))，除了第一個參數外，其他忽略，需注意是負數時，'-'會轉成 NaN，EX: "-32".map(Number) -> [NaN, 3, 2] */
//       .reduce((prev, curr) => prev + curr, 0)
//   );
// }

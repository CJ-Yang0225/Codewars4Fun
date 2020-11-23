/* 
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

// function findLongest(array) {
//   let num = "0";
//   for (let i = 0; i < array.length; i++) {
//     let string = array[i].toString();
//     if (string.length > num.length) {
//       num = string;
//     }
//   }
//   return parseInt(num);
// }

function findLongest(array) {
  return array.sort((a, b) => (b + "").length - (a + "").length)[0];
}

// const findLongest = arr =>
//   arr.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));

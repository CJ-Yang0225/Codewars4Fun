/* 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
------------------------------------------------------------------------------*/

function solution(str, ending) {
  // slice() 若省略了第二個參數，則會提取至陣列的最後一個元素
  return str.slice(str.length - ending.length) == ending ? true : false;
}

// function solution(str, ending) {
//   let result = true;

//   for (let i = 0; i < ending.length; i++) {
//     if (ending[ending.length - 1 - i] != str[str.length - 1 - i])
//       result = false;
//   }

//   return result;
// }

// String.prototype.endsWith()
// function solution(str, ending) {
//   return str.endsWith(ending);
// }

/* The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards. */
// function solution(str, ending) {
//   return str.substr(-ending.length) == ending || ending.length == 0;
// }

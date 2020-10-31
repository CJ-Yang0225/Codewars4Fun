/* Convert number to reversed array of digits */

// Sample Tests:
// Test.assertDeepEquals(digitize(35231), [1, 3, 2, 5, 3]);

// function digitize(n) {
//   var initArr = (n + "").split(""); // Convert (numbers) to array of (strings)
//   initArr.sort(() => 1); // Reverse array

//   for (var i = 0; i < initArr.length; i++) initArr[i] = parseInt(initArr[i]); // Convert (array of strings) to (array of numbers)

//   return initArr;
// }

/* Best solution */
function digitize(n) {
  return String(n)
    .split("")
    .map(Number)
    .reverse();
}

/* My solution1 */
// function digitize(n) {
//     var initArray = (n + "").split('');
//     var reversedArray = [];
//     //   reversedArray = initArray.sort(() => 1);

//     for (var i = 0; i < initArray.length; i++)
//         reversedArray[i] = parseInt(initArray[initArray.length - (i + 1]);

//     return reversedArray;
// }

/* My solution2 */
// function digitize(n) {
//   var initArray = (n + "").split("");
//   initArray = initArray.reverse();

//   for (var i = 0; i < initArray.length; i++)
//     initArray[i] = parseInt(initArray[i]);

//   return initArray;
// }

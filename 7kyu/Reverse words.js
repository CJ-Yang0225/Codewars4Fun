/* 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
------------------------------------------------------------------------------*/

// function reverseWords(str) {
//   let newStr = str.split(" ");
//   let temp = "";
//   for (let i = 0; i < newStr.length; i++) {
//     for (let j = newStr[i].length - 1; j >= 0; j--) {
//       temp += newStr[i][j];
//     }
//     if (i < newStr.length - 1) temp += " ";
//   }
//   return temp;
// }

// function reverseWords(str) {
//   let reversedWord = "";
//   let reversedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       reversedWord = str[i] + reversedWord;
//     } else {
//       reversedStr += reversedWord + " ";
//       reversedWord = "";
//     }
//   }
//   return reversedStr + reversedWord;
// }

function reverseWords(str) {
  //split words into separate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

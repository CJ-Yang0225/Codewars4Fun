/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
------------------------------------------------------------------------------*/

function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1;

  // map() 會建立一個新的陣列
  let b1 = a1.map((str) => str.length);
  let b2 = a2.map((str) => str.length);

  return Math.max(
    // 陣列解構 -> 多個數字
    Math.max(...b1) - Math.min(...b2),
    Math.max(...b2) - Math.min(...b1)
  );
}

// function mxdiflg(a1, a2) {
//   let maxNum = 0;

//   if (!a1.length || !a2.length) return -1;

//   for (let i = 0; i < a1.length; i++) {
//     for (let j = 0; j < a2.length; j++) {
//       if (Math.abs(a1[i].length - a2[j].length) > maxNum)
//         maxNum = Math.abs(a1[i].length - a2[j].length);
//     }
//   }

//   return maxNum;
// }

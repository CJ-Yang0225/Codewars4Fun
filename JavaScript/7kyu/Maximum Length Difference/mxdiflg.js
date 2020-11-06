function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1;

  // map() 會建立一個新的陣列
  let b1 = a1.map(str => str.length);
  let b2 = a2.map(str => str.length);

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

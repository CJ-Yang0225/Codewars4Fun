/* Array.sort 使用合併排序法(Merge)。時間複雜度 O(nlogn) */
var isAnagram = function(test, original) {
  if (test.length != original.length) return false;

  /* replace(/[^\w]/g, '') 排除非數字字母字元。會傳回一個新字串
   *sort() 會原地（in place）對一個陣列的所有元素進行排序，並回傳此陣列
   *split() 使用指定的分隔符字串將一個String物件分割成子字串陣列
   *join() 會將陣列（或一個 array-like 物件）中所有的元素連接、合併成一個字串，並將其回傳。
   */

  //   let [...stringA] = test.replace(/[^\w]/g, '').toLowerCase() // 未排序的陣列
  //   let [...stringB] = original.replace(/[^\w]/g, '').toLowerCase() // 未排序的陣列

  let stringA = test
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let stringB = original
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return stringA == stringB;
};

/* 字串的字元映射(Map)。時間複雜度 O(n)*/
// function isAnagram(test, original) {
//   if (test.length != original.length) return false;

//   let stringA = test.replace(/[^\w]/g, "").toLowerCase();
//   let stringB = original.replace(/[^\w]/g, "").toLowerCase();

//   const charMapA = getCharMap(stringA);
//   const charMapB = getCharMap(stringB);

//   /* 將 charMapA 中的字元與 charMapB 進行比對 */
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// /* 將字串中的字元(Key)放入物件中，已存在就對其(Value) +1，不存在則設為 1 */
// function getCharMap(string) {
//   let charMap = {};

//   for (let char of string) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

/* includes() 判斷陣列是否包含特定的元素，並以此來回傳 true 或 false */
function check(a, x) {
  return a.includes(x);
}

/* some() 方法會透過給定函式、測試陣列中是否至少有一個元素，
通過該函式所實作的測試。這方法回傳的是布林值。 */
// const check = (a, x) => a.some(v => v == x);

/* filter() 方法會建立一個經指定之函式運算後，
由原陣列中通過該函式檢驗之元素所構成的新陣列。 
所以只要回傳的陣列大於0，代表陣列中包含目標。*/
// const check = (a, x) => a.filter(v => v == x).length > 0;

/* 直觀：遍歷陣列 */
// function check(a, x) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == x) return true;
//   }
//   return false;
// }

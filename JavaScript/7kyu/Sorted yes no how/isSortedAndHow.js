function isSortedAndHow(arr) {
  // 利用 || 特性，跳過 index 為 0 時
  return arr.every((_, i) => i == 0 || arr[i] >= arr[i - 1])
    ? "yes, ascending"
    : arr.every((_, i) => i == 0 || arr[i] <= arr[i - 1])
    ? "yes, descending"
    : "no";
}

// function isSortedAndHow(array) {
//   // 複製一個新的陣列並排序(遞增/遞減)
//   let ascending = array.slice().sort((a, b) => a - b);
//   let descending = array.slice().sort((a, b) => b - a);

//   // 陣列轉字串後比較
//   if (array.join() == ascending.join()) return "yes, ascending";
//   else if (array.join() == descending.join()) return "yes, descending";
//   else return "no";
// }

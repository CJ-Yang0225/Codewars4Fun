/* 透過 Two Pointers 方式降低時間複雜度 */
function dataReverse(data) {
  let left = 0;
  let right = data.length - 8;
  const segmentData = new Array(data.length).fill(null);

  if (!data.length) return [];

  // 若 data / 8 為基數時，兩端會指向同一位置，所以要 <=
  while (left <= right) {
    for (let i = 0; i < 8; i++) {
      segmentData[right + i] = data[left + i];
      segmentData[left + i] = data[right + i];
    }
    left += 8;
    right -= 8;
  }

  return segmentData;
}

/* 直覺的寫法 */
// function dataReverse(data) {
//   let results = [];
//   const length = data.length;
//   for (let i = 1; i <= length / 8; i++) {
//     let pointer = length - i * 8
//     results.push(...data.slice(pointer, pointer + 8));
//   }
//   return results;
// }

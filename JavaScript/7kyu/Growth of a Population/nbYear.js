function nbYear(p0, percent, aug, p) {
  // 注意 var 的作用域
  for (var count = 0; p0 < p; count++) p0 += (p0 * percent) / 100 + aug;
  return count;
}

// function nbYear(p0, percent, aug, p) {
//   let result = 0;

//   while (p0 < p) {
//     p0 += (p0 * percent) / 100 + aug;
//     result++;
//   }

//   return result;
// }

function oddOrEven(array) {
  return array.reduce((prev, curr) => prev + curr, 0) % 2 ? "odd" : "even";
}

// function oddOrEven(array) {
//   let result = 0;

//   for (let i = 0; i < array.length; i++) {
//     result += array[i];
//   }

//   if (result % 2) {
//     return "odd";
//   } else {
//     return "even";
//   }
// }

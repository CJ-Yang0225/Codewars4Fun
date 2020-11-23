/* 
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 
------------------------------------------------------------------------------*/

function stray(numbers) {
  let strayNumberCount = {};

  for (let i = 0; i < numbers.length; i++)
    // 有值：+1，無值：設為1
    strayNumberCount[numbers[i]] = strayNumberCount[numbers[i]] + 1 || 1;

  // '+'代表 String -> Number
  return +Object.keys(strayNumberCount).find(
    (key) => strayNumberCount[key] == 1
  );
}

// function stray(numbers) {
//   numbers = numbers.sort();
//   return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0];
// }

/* 當 odd-length array of integers */
// const stray = (numbers) => numbers.reduce((pre, val) => pre ^ val);

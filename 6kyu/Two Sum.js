/* 
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2)
------------------------------------------------------------------------------*/

function twoSum(numbers, target) {
  const map = new Map();

  // 本來想簡化用 for (let i in numbers)，但回傳的屬性 i 會是字串
  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(numbers[i], i);
    }
  }
  return [];
}

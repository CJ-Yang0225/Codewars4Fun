/* In this Kata, you will be given directions and your task will be to find your way back.

solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy'] */

function solve(arr) {
  const map = { Begin: "Begin", Left: "Right", Right: "Left" };
  let result = [],
    directions = [],
    roads = [];

  arr.forEach((str, index) => {
    let [direction, road] = str.split(" on ");
    directions.push(direction);
    roads.push(road);
  });

  for (let i = 0; i < arr.length; i++) {
    // 重點
    result.unshift(map[directions[(i + 1) % arr.length]] + " on " + roads[i]);
  }

  return result;
}

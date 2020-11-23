/* 
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
------------------------------------------------------------------------------*/

// function towerBuilder(nFloors) {
//   // build here
//   let tower = [];
//   for (let i = 1; i <= nFloors; i++) {
//     tower[i - 1] = "";
//     for (let j = 1; j <= nFloors - i; j++) {
//       tower[i - 1] += " ";
//     }
//     for (let k = 1; k <= i * 2 - 1; k++) {
//       tower[i - 1] += "*";
//     }
//     for (let j = 1; j <= nFloors - i; j++) {
//       tower[i - 1] += " ";
//     }
//   }

//   return tower;
// }

// function towerBuilder(nFloors) {
//   let tower = [];

//   for (let i = 1; i <= nFloors; i++) {
//     const space = ' '.repeat(nFloors - i);
//     const star = '*'.repeat(2 * i - 1);
//     tower.push(space + star + space);
//   }

//   return tower;
// }

function towerBuilder(nFloors) {
  // [...Array(nFloors)] -> ['undefined', ... , 'undefined']
  return [...Array(nFloors)].map((_, key) => {
    return (
      " ".repeat(nFloors - key - 1) +
      "*".repeat(2 * key + 1) +
      " ".repeat(nFloors - key - 1)
    );
  });
}

/* 
You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Clock rotation 180 degrees: rot

rot(s) => "ponm\nlkji\nhgfe\ndcba"

selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string obtained by clock rotation 180 degrees with dots interspersed in order (hopefully) to better show the rotation when printed.

s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

or printed:
|rotation        |selfie_and_rot
|abcd --> ponm   |abcd --> abcd....
|efgh     lkji   |efgh     efgh....
|ijkl     hgfe   |ijkl     ijkl....   
|mnop     dcba   |mnop     mnop....
                           ....ponm
                           ....lkji
                           ....hgfe
                           ....dcba
*/

/* My Solution */
function rot(strng) {
  return strng.split("").reverse().join("");
}
function selfieAndRot(strng) {
  const dots = ".".repeat(strng.indexOf("\n"));
  const newrot = rot(strng)
    .split("\n")
    .join("\n" + dots);
  return strng.split("\n").join(dots + "\n") + `${dots}\n${dots}${newrot}`;
}
function oper(fct, s) {
  return fct(s);
}

/* Clever */
function rot(s) {
  return s.split("").reverse().join("");
}

function selfieAndRot(s) {
  return (
    (s = s.replace(/.+/g, (t) => t + t.replace(/./g, "."))) + "\n" + rot(s)
  );
}

function oper(fn, s) {
  return fn(s);
}

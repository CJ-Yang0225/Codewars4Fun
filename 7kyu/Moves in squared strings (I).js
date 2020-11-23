/*
This kata is the first of a sequence of four about "Squared Strings".

You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:

vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd

------------------------------------------------------------------------------*/

function vertMirror(strng) {
  // 改寫自 7kyu: Reverse words
  return strng.split("").reverse().join("").split("\n").reverse().join("\n");
}

function horMirror(strng) {
  return strng.split("\n").reverse().join("\n");
}

function oper(fct, s) {
  return fct(s);
}

// const vertMirror = s => s.map(s => [...s].reverse().join(""));
// const horMirror = s => s.reverse();

// const oper = (fct, s) => fct(s.split("\n")).join("\n");

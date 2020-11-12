function vertMirror(strng) {
  // 改寫自 7kyu: Reverse words
  return strng
    .split("")
    .reverse()
    .join("")
    .split("\n")
    .reverse()
    .join("\n");
}

function horMirror(strng) {
  return strng
    .split("\n")
    .reverse()
    .join("\n");
}

function oper(fct, s) {
  return fct(s);
}

// const vertMirror = s => s.map(s => [...s].reverse().join(""));
// const horMirror = s => s.reverse();

// const oper = (fct, s) => fct(s.split("\n")).join("\n");

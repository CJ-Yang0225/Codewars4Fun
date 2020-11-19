/* My Solution */
function rot(strng) {
  return strng
    .split("")
    .reverse()
    .join("");
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
// function rot(s) {
//   return s
//     .split("")
//     .reverse()
//     .join("");
// }

// function selfieAndRot(s) {
//   return (s = s.replace(/.+/g, t => t + t.replace(/./g, "."))) + "\n" + rot(s);
// }

// function oper(fn, s) {
//   return fn(s);
// }

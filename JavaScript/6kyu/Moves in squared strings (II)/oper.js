/* My Solution */
function rot(strng) {
  return strng
    .split("")
    .reverse()
    .join("");
}
function selfieAndRot(strng) {
  const dot = ".".repeat(strng.indexOf("\n"));
  const newrot = rot(strng)
    .split("\n")
    .join(`\n${dot}`);
  return strng.split("\n").join(`${dot}\n`) + `${dot}\n${dot}` + newrot;
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

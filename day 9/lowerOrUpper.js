function lowerOrUpper(letter) {
  let result = letter.charCodeAt();

  if (result >= 65 && result <= 90) {
    console.log("upper-case");
  } else if (result >= 97 && result <= 122) {
    console.log("lower-case");
  }
}
lowerOrUpper("L");

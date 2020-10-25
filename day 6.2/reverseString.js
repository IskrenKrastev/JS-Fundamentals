function reverseString(input) {
  let reversed = "";
  let a = "";
  for (let i = input.length - 1; i >= 0; i--) {
    a = input[i];
    reversed += "" + a;
  }
  console.log(reversed);
}
reverseString("Hello");

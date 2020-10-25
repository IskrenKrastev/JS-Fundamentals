function binaryToDecinmal(num) {
  num = num.toString();
  let result = 0;
  let sum = 0;
  let num2 = 0;

  let expo = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    num2 = Number(num[i]);

    result += num2 * Math.pow(2, expo);
    expo++;
  }
  console.log(result);
}
binaryToDecinmal("11110000");

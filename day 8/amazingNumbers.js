function amazingNumbers(number) {
  let sum = 0;
  number = number.toString();

  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  let result = sum.toString().includes("9");

  console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumbers(583472);

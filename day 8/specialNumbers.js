function specialNumbers(input) {
  let n = Number(input);

  let sum = 0;
  for (let number = 1; number <= n; number++) {
    number = number.toString();
    for (let i = 0; i < number.length; i++) {
      sum += Number(number[i]);
    }

    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${number} -> True`);
    } else {
      console.log(`${number} -> False`);
    }
    sum = 0;
  }
}
specialNumbers(15);

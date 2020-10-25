function trinagleOfNumbers(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result = "";
    for (let j = 1; j <= i; j++) {
      result += i + " ";
    }
    console.log(result);
  }
}
trinagleOfNumbers(3);

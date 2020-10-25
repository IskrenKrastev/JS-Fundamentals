function primeNumberChecker(num) {
  isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  if (isPrime === false) {
    console.log("false");
  } else {
    console.log("true");
  }
}
primeNumberChecker(7);

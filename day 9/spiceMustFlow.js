function spiceMustFLow(n) {
  let day = 0;

  let totalSpice = 0;
  while (n >= 100) {
    totalSpice += n;
    totalSpice -= 26;
    day++;
    n -= 10;

    if (n < 100 && n > 0) {
      totalSpice -= 26;
      break;
    }
  }

  console.log(day);

  console.log(totalSpice);
}
spiceMustFLow(111);

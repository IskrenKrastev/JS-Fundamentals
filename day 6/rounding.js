function rounding(number, rounder) {
  if (rounder > 15) {
    rounder = 15;
  }
  console.log(parseFloat(number.toFixed(rounder)));
}
rounding(10.5, 3);

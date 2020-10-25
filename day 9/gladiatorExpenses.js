function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let totalPrice = 0;
  let lost = 1;
  let shieldCount = 0;

  while (lost !== lostFights + 1) {
    if (lost % 2 === 0) {
      totalPrice += helmetPrice;
    }
    if (lost % 3 === 0) {
      totalPrice += swordPrice;
    }
    if (lost % 2 === 0 && lost % 3 === 0) {
      totalPrice += shieldPrice;
      shieldCount++;
    }
    if (shieldCount % 2 === 0 && shieldCount !== 0) {
      totalPrice += armorPrice;
      shieldCount = 0;
    }
    lost++;
  }
  console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(6, 2, 3, 4, 5);

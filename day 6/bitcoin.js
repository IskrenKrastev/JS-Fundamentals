function bitcoin(input) {
  // 1bt = 11949.16 lv
  // 1g gold = 67.51 lv
  // if day % 3 === 0 gold * 0.70
  let goldToday = 0;
  let leva = 0;
  let dayCounter = 0;
  let bitcoin = 0;
  let rest = 0;
  let firstDay = 0;
  let lastBitcoin = 0;

  for (let i = 1; i <= input.length; i++) {
    goldToday = input[i - 1];
    dayCounter = i;
    if (dayCounter % 3 === 0) {
      goldToday *= 0.7;
    }
    leva += (goldToday * 67.51 + rest);

    if (leva >= 11949.16) {
      lastBitcoin = parseInt(leva / 11949.16);
      bitcoin += lastBitcoin;
      
      
    }
    rest = leva - lastBitcoin * 11949.16;
    leva = 0;

    if (firstDay === 0 && bitcoin > 0) {
      firstDay = dayCounter;
    }
  }
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitcoin > 0){
  console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  console.log(`Left money: ${rest.toFixed(2)} lv.`);
}
bitcoin([50,100]);

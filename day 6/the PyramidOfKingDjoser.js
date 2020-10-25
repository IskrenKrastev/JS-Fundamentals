function thePyramid(required, increment) {
  let stone = 0;
  let marble = 0;
  let lazuli = 0;
  let counter = 0;
  let gold = 0;
  for (let i = required; i >= 1; i -= 2) {
    counter++;
    while (i > 2) {
      stone += (i - 2) * (i - 2) * increment;

      if (counter % 5 === 0) {
        lazuli += (i - 1) * 2 * 2 * increment;
      } else {
        marble += (i - 1) * 2 * 2 * increment;
      }
      break;
    }
    if (i <= 2) {
      gold = i * i * increment;
    }
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);
}
thePyramid(11, 1);

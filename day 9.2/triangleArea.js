function triangleArea(sideA, sideB, sideC) {
  let per = (sideA + sideB + sideC) / 2;
  let area = Math.sqrt(per * (per - sideA) * (per - sideB) * (per - sideC));
  console.log(area);
}
triangleArea(2, 3.5, 4);

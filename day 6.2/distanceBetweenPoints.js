function distanceBetweenPoints(x1, y1, x2, y2) {
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);

  let result = Math.sqrt(a*a + b*b); 
  // формула за намиране на дистацията между две точки
  console.log(result);
}
distanceBetweenPoints(30,40,5,20);

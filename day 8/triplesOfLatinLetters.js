function triplesOfLatinLetters(n) {
  let result = "";

  for (let a = 0; a < n; a++) {
    let aaa = String.fromCharCode(97 + a);
    for (let b = 0; b < n; b++) {
      let bbb = String.fromCharCode(97 + b);
      for (let c = 0; c < n; c++) {
        let ccc = String.fromCharCode(97 + c);
        result += "" + aaa + bbb + ccc;
        console.log(result);
        result = "";
      }
    }
  }
}
triplesOfLatinLetters(3);

function chessBoard(n) {
  let size = Number(n);
  let currentColor = "black";
  let previousColor = "";

  console.log('<div class="chessboard">');

  for (let rows = 1; rows <= size; rows++) {
    console.log("  <div>");

    for (let col = 1; col <= size; col++) {
      console.log(`    <span class="${currentColor}"></span>`);
      previousColor = currentColor;
      previousColor === "black"
        ? (currentColor = "white")
        : (currentColor = "black");
    }
    console.log("  </div>");
    if (size % 2 === 0) {
      previousColor = currentColor;
      previousColor === "black"
        ? (currentColor = "white")
        : (currentColor = "black");
    }
  }
  console.log("</div>");
}
chessBoard(4);

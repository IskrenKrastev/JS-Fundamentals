function nextDay(n1, n2, n3) {
  let date = new Date(n1, n2 - 1, n3);

  date.setDate(date.getDate() + 1);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  console.log(`${year}-${month}-${day}`);
}
nextDay(2016, 9, 30);

function theatrePromotions(in1, in2) {
  let dayType = in1;
  let age = Number(in2);
  let price = 0;

  switch (dayType) {
    case "Weekday":
      if (age >= 0 && age <= 18) {
        price = 12;
      } else if (age > 18 && age <= 64) {
        price = 18;
      } else if (age > 64 && age <= 122) {
        price = 12;
      } else {
        price = 0;
      }
      break;

    case "Weekend":
      if (age >= 0 && age <= 18) {
        price = 15;
      } else if (age > 18 && age <= 64) {
        price = 20;
      } else if (age > 64 && age <= 122) {
        price = 15;
      } else {
        price = 0;
      }
      break;
    case "Holiday":
      if (age >= 0 && age <= 18) {
        price = 5;
      } else if (age > 18 && age <= 64) {
        price = 12;
      } else if (age > 64 && age <= 122) {
        price = 10;
      } else {
        price = 0;
      }
      break;
    default:
      price = 0;
      break;
  }
  if (price === 0) {
    console.log("Error!");
  } else {
    console.log(price + "$");
  }
}
theatrePromotions("Weekday", -42);

function vacation(people, typeOfGroup, day) {
  let price = 0;
  let totalPrice = 0;

  if (typeOfGroup === "Students") {
    if (day === "Friday") {
      price = 8.45;
    } else if (day === "Saturday") {
      price = 9.8;
    } else if (day === "Sunday") {
      price = 10.46;
    }
    totalPrice = people * price;
    if (people >= 30) {
      totalPrice *= 0.85;
    }
  } else if (typeOfGroup === "Business") {
    if (day === "Friday") {
      price = 10.9;
    } else if (day === "Saturday") {
      price = 15.6;
    } else if (day === "Sunday") {
      price = 16;
    }
    if (people >= 100) {
      people -= 10;
    }
    totalPrice = people * price;
  } else if (typeOfGroup === "Regular") {
    if (day === "Friday") {
      price = 15;
    } else if (day === "Saturday") {
      price = 20;
    } else if (day === "Sunday") {
      price = 22.5;
    }
    totalPrice = people * price;
    if (people >= 10 && people <= 20) {
      totalPrice *= 0.95;
    }
  }

  console.log("Total price: " + totalPrice.toFixed(2));
}
vacation(30, "Students", "Sunday");

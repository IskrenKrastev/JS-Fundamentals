function employees(arr) {
  let employeesArr = [];

  arr.forEach((name) => {
    employeesArr.push({
      name: name,
      perNum: name.length,
    });
  });

  for (let person of employeesArr) {
    console.log(`Name: ${person.name} -- Personal Number: ${person.perNum} `);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
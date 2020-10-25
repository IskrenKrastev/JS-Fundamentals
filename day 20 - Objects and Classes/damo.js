// let person = {
//     name: 'Iskren',
//     age: 35
// };

// //person.height = 188;
// person['height'] = 188

// console.log(person.age);



class Human {
    constructor(firstName, old) {
        this.name = firstName;
        this.age = old;
    }
}

let classObject = new Human('Ogi', 36);
let secondObject = new Human('iskren', 35)

console.log(classObject.name);
console.log(secondObject.age);
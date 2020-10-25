function phoneBook(input) {
    // let contacts = {};

    // input.forEach(line => {

    //     let [name, phone] = line.split(' ');
    //     contacts[name] = phone;
    // });

    // Object.keys(contacts).forEach(key => {
    //     console.log(`${key} -> ${contacts[key]}`);
    // });

    let constacts = new Map();

    input.forEach(line => {
        let [name, phone] = line.split(' ');

        constacts.set(name, phone);

    });

    for (let kvp of constacts.entries()) {

        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);
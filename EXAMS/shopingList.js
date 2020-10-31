function shopingList(input) {

    let groceryList = input.shift().split('!');
    let index;
    let line = input.shift();

    while (line !== 'Go Shopping!') {
        let [command, firtsItem, secondItem] = line.split(' ');

        switch (command) {

            case 'Urgent':
                if (!groceryList.includes(firtsItem)) {
                    groceryList.unshift(firtsItem);
                }
                break;

            case 'Unnecessary':
                index = groceryList.indexOf(firtsItem);

                if (index > -1) {
                    groceryList.splice(index, 1)
                }

                break;

            case 'Correct':
                index = groceryList.indexOf(firtsItem);
                if (index > -1) {
                    groceryList[index] = secondItem;
                }
                break;

            case 'Rearrange':
                index = groceryList.indexOf(firtsItem);
                if (index > -1) {
                    groceryList.splice(index, 1);
                    groceryList.push(firtsItem);
                }
                break;
        }
        line = input.shift()
    }
    console.log(groceryList.join(', '));
}
shopingList([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]);
shopingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);
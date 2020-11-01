function adAstra(input) {

    let patternFood = /([#|])(?<item>[A-Za-z ]+)(\1)(?<date>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/g;
    let matched = input[0].matchAll(patternFood);
    let items = [];
    let sumOfCal = 0;

    if (matched !== null) {

        for (let match of matched) {
            let currentItems = [];
            let calories = match.groups['calories'];
            let item = match.groups['item'];
            let date = match.groups['date']
            sumOfCal += Number(calories);
            currentItems.push(item, date, calories);
            items.push(currentItems)
        }
    }
    let neededDays = sumOfCal / 2000;
    console.log(`You have food to last you for: ${Math.floor(neededDays)} days!`);

    for (let item of items) {
        console.log(`Item: ${item[0]}, Best before: ${item[1]}, Nutrition: ${item[2]}`);
    }

}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]);
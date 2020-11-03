function nikuldenMeals(input) {

    let line = input.shift();
    let list = {};
    let unlikeCount = 0;

    while (line !== 'Stop') {
        let [likeOrNo, name, meal] = line.split('-');

        if (likeOrNo === 'Like') {
            if (!list[name]) {
                list[name] = [];
                list[name].push(meal);
            } else {

                if (!list[name].includes(meal)) {
                    list[name].push(meal);
                }
            }
        } else {
            if (!list[name]) {
                console.log(`${name} is not at the party.`);
            } else {
                if (!list[name].includes(meal)) {
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                } else {
                    let index = list[name].indexOf(meal);
                    list[name].splice(index, 1);
                    console.log(`${name} doesn't like the ${meal}.`);
                    unlikeCount++;
                }
            }
        }
        line = input.shift();
    }
    let sortedGuests = Object.entries(list).sort((a, b) => {

        return b[1].length - a[1].length || a[0].localeCompare(b[0])
    });

    for (let guest of sortedGuests) {
        console.log(`${guest[0]}: ${guest[1].join(', ')}`);
    }
    console.log(`Unliked meals: ${unlikeCount}`);
}
nikuldenMeals([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
]);
nikuldenMeals([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
]);
nikuldenMeals([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
]);
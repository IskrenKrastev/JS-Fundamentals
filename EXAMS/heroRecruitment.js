function heroRecruitment(input) {

    let line = input.shift();
    let heroes = {};

    while (line !== 'End') {
        let [command, heroName, secondValue] = line.split(' ');

        if (command === 'Enroll') {

            if (heroes[heroName]) {
                console.log(`${heroName} is already enrolled.`);
            } else {
                heroes[heroName] = [];
            }
        } else if (command === 'Learn') {

            if (heroes[heroName]) {
                if (heroes[heroName].indexOf(secondValue) > -1) {
                    console.log(`${heroName} has already learnt ${secondValue}.`);
                } else {
                    heroes[heroName].push(secondValue);
                }
            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        } else if (command === 'Unlearn') {

            if (!heroes[heroName]) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if (heroes[heroName].indexOf(secondValue) === -1) {
                    console.log(`${heroName} doesn't know ${secondValue}.`);
                } else {
                    heroes[heroName].splice(heroes[heroName].indexOf(secondValue), 1)
                }
            }
        }
        line = input.shift()
    }

    let sortedHeroes = Object.entries(heroes).sort((a, b) => {

        return b[1].length - a[1].length || a[0].localeCompare(b[0])
    });

    console.log('Heroes:');
    for (let hero of sortedHeroes) {
        console.log(`== ${hero[0]}: ${hero[1].join(', ')}`);
    }
}
// heroRecruitment([
//     'Enroll Stefan',
//     'Enroll Pesho',
//     'Enroll Stefan',
//     'Learn Stefan ItShouldWork',
//     'Learn Stamat ItShouldNotWork',
//     'Unlearn Gosho Dispel',
//     'Unlearn Stefan ItShouldWork',
//     'End'
// ]);
heroRecruitment([
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stefan ItShouldWork',
    'Unlearn Stefan NotFound',
    'End'
]);
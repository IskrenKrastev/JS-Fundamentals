function plantDiscovery(input) {

    let n = Number(input.shift());
    let line;
    let plants = {};

    function average(plant) {
        if (plants[plant].rating.length === 0) {
            return 0
        } else {
            let finalRating = plants[plant].rating.reduce((a, b) => a + b) / (plants[plant].rating).length;
            return finalRating
        }
    }

    for (let i = 0; i < n; i++) {
        line = input.shift();
        let [plant, rarity] = line.split('<->');

        if (!plants[plant]) {
            plants[plant] = {
                rarity: Number(rarity),
                rating: []
            }
        } else {
            plants[plant].rarity = Number(rarity)
        }
    }
    line = input.shift();

    while (line !== 'Exhibition') {

        let [command, info] = line.split(': ');
        let [plant, value] = info.split(' - ');

        if (plants.hasOwnProperty(plant)) {

            switch (command) {
                case 'Rate':
                    let rating = Number(value);
                    plants[plant].rating.push(rating);
                    break;
                case 'Update':
                    let rarityNew = Number(value);
                    plants[plant].rarity = rarityNew
                    break;
                case 'Reset':
                    plants[plant].rating = [];
                    break;
                default:
                    console.log('error');
                    break;
            }
        } else {
            console.log('error');
        }
        line = input.shift();
    }
    let sortedPlants = Object.entries(plants).sort((a, b) => {
        let currentRarA = plants[a[0]].rarity;
        let currentRarb = plants[b[0]].rarity;
        let currrentRatA = average(a[0]);
        let currrentRatB = average(b[0])
        return currentRarb - currentRarA || currrentRatB - currrentRatA;
    });

    console.log(`Plants for the exhibition:`);

    for (let plant of sortedPlants) {
        let rar = Number(plants[plant[0]].rarity)
        let rat = average(plant[0]);
        console.log(`- ${plant[0]}; Rarity: ${rar}; Rating: ${rat.toFixed(2)}`);
    }
}
plantDiscovery([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);
plantDiscovery([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
]);
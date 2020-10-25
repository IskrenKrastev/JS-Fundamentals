function inventory(input) {
    let heroes = [];

    input.forEach(line => {
        let token = line.split(' / ');
        let hero = {
            name: token[0],
            level: Number(token[1]),
            items: token[2].split(', ').sort((a, b) => a.localeCompare(b)).join(', '),
        }
        heroes.push(hero);
    });

    heroes.sort((a, b) => {
        return a.level - b.level;
    });

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
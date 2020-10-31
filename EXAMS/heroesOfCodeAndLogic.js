function heroesOfCodeAndLogic(input) {

    let n = Number(input.shift());
    let line;
    let heroes = {};

    for (let i = 0; i < n; i++) {
        line = input.shift();
        let [heroName, hitPoint, manaPoint] = line.split(' ');
        hitPoint = Number(hitPoint);
        manaPoint = Number(manaPoint);

        heroes[heroName] = {
            hitPoint: hitPoint,
            manaPoint: manaPoint,
        }
    }
    line = input.shift();

    while (line !== 'End') {

        let [command, heroName, firstValue, secondValue] = line.split(' - ');

        switch (command) {

            case 'CastSpell':
                let mpNeeded = Number(firstValue);
                let spellName = secondValue;

                if (heroes[heroName].manaPoint >= mpNeeded) {
                    heroes[heroName].manaPoint -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].manaPoint} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                let damage = Number(firstValue);
                let attacker = secondValue;
                heroes[heroName].hitPoint -= damage;

                if (heroes[heroName].hitPoint > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hitPoint} HP left!`);
                } else {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete heroes[heroName];
                }
                break;

            case 'Recharge':
                let manaAmount = Number(firstValue);

                if (heroes[heroName].manaPoint + manaAmount > 200) {
                    let recoverWith = 200 - heroes[heroName].manaPoint;
                    heroes[heroName].manaPoint = 200;
                    console.log(`${heroName} recharged for ${recoverWith} MP!`);
                } else {
                    heroes[heroName].manaPoint += manaAmount
                    console.log(`${heroName} recharged for ${manaAmount} MP!`);
                }

                break;

            case 'Heal':
                let hitAmount = Number(firstValue);

                if (heroes[heroName].hitPoint + hitAmount > 100) {
                    let healWith = 100 - heroes[heroName].hitPoint;
                    heroes[heroName].hitPoint = 100;
                    console.log(`${heroName} healed for ${healWith} HP!`);
                } else {
                    heroes[heroName].hitPoint += hitAmount
                    console.log(`${heroName} healed for ${hitAmount} HP!`);
                }
                break;
        }
        line = input.shift()
    }
    let sortedHeroes = Object.entries(heroes).sort((a, b) => {
        return heroes[b[0]].hitPoint - heroes[a[0]].hitPoint || a[0].localeCompare(b[0])
    });

    if (sortedHeroes.length > 0) {
        for (let hero of sortedHeroes) {
            console.log(hero[0]);
            console.log(`  HP: ${heroes[hero[0]].hitPoint}`);
            console.log(`  MP: ${heroes[hero[0]].manaPoint}`);
        }
    }
}
heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);
heroesOfCodeAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);
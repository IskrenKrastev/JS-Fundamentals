function dungeonestDark(input) {

    let health = 100;
    let coins = 0;
    let isDie = false;

    let rooms = input[0].split('|');

    for (let i = 0; i < rooms.length; i++) {

        let content = rooms[i].split(' ')
        if (content[0] === 'potion') {
            health += Number(content[1]);


            if (health > 100) {

                console.log(`You healed for ${Number(content[1]) - (health - 100)} hp.`);
                health = 100;
                console.log(`Current health: 100 hp.`);

            } else {

                console.log(`You healed for ${Number(content[1])} hp.`);

                console.log(`Current health: ${health} hp.`);

            }

        } else if (content[0] === 'chest') {
            coins += Number(content[1]);

            console.log(`You found ${Number(content[1])} coins.`);

        } else {
            health -= content[1];

            if (health > 0) {
                console.log(`You slayed ${content[0]}.`);

            } else {
                console.log(`You died! Killed by ${content[0]}.`);
                console.log(`Best room: ${i + 1}`);
                isDie = true;
                break;


            }
        }
    }
    if (isDie === false) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }



}
dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])
function disneylandJourney(input) {

    let journeyCost = Number(input.shift());
    let months = Number(input.shift());;
    let collected = 0;

    for (let i = 1; i <= months; i++) {

        if (i % 2 !== 0 && i !== 1) {
            collected -= collected * 0.16;
        }
        if (i % 4 === 0) {
            collected += collected * 0.25
        }
        collected += journeyCost * 0.25;
    }

    if (collected >= journeyCost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(collected - journeyCost).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(journeyCost - collected).toFixed(2)}lv. more.`);
    }
}
disneylandJourney(['1000', '4']);
disneylandJourney(['3265', '3'])
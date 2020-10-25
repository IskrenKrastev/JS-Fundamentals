function carWash(arrOfCommands) {
    // let isClean = 0;

    // for (let i = 0; i < arrOfCommands.length; i++) {
    //     let command = arrOfCommands[i];

    //     switch (command) {
    //         case 'soap':
    //             isClean += 10;
    //             break;
    //         case 'water':
    //             isClean += isClean * 0.20;
    //             break;
    //         case 'vacuum cleaner':
    //             isClean += isClean * 0.25;
    //             break;
    //         case 'mud':
    //             isClean -= isClean * 0.10;
    //             break;
    //     }

    // }
    // console.log(`The car is ${isClean.toFixed(2)}% clean.`);

    let isClean = 0;

    let soap = x => x + 10;
    let water = x => x + x * 0.20;
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.10;

    for (let i = 0; i < arrOfCommands.length; i++) {
        let command = arrOfCommands[i];
        switch (command) {
            case 'soap':
                isClean = soap(isClean);
                break;
            case 'water':
                isClean = water(isClean);
                break;
            case 'vacuum cleaner':
                isClean = vacuum(isClean);
                break;
            case 'mud':
                isClean = mud(isClean);
                break;
        }
    }
    console.log(`The car is ${isClean.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
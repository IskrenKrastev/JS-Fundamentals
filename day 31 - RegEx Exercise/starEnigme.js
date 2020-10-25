function starEnigma(input) {
    let lines = input.shift();
    let pattern = /[s,t,a,r]/gi;
    let attacked = [];
    let destroied = [];

    let patterForEncrypt = /@(?<planet>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<typeAttack>[A|D])![^@:!\->]*\->(?<soldier>\d+)/;

    for (let i = 0; i < lines; i++) {
        let text = input[i];

        let key = text.match(/[star]/gi) && text.match(/[star]/gi).length;
        text = text.split('');
        let encrypted = [];
        text.forEach(char => {
            let asciiNum = char.charCodeAt() - key
            let newChar = String.fromCharCode(asciiNum)
            encrypted.push(newChar);
        });

        encrypted = encrypted.join('');
        let result = encrypted.match(patterForEncrypt);

        if (result !== null) {
            if (result.groups['typeAttack'] === 'A') {

                attacked.push(result.groups['planet'])
            } else {

                destroied.push(result.groups['planet'])
            }
        }
    }
    console.log(`Attacked planets: ${attacked.length}`);
    if (attacked.length > 0) {
        attacked = attacked.sort((a, b) => {
            return a.localeCompare(b)
        });
        attacked.forEach(planet => {
            console.log(`-> ${planet}`);
        });
    }
    console.log(`Destroyed planets: ${destroied.length}`);
    if (destroied.length > 0) {
        destroied = destroied.sort((a, b) => {
            return a.localeCompare(b);
        });
        destroied.forEach(planet => {
            console.log(`-> ${planet}`);
        })
    }
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
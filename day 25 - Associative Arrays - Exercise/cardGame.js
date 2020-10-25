function cardGame(input) {
    let playGame = {}

    function cardPoints(card) {

        let power = card[0];
        let type = card[1];

        if (power === '1') {
            power = 10;
            type = card[2]
        }

        if (power === 'J') {
            power = '11';
        } else if (power === 'Q') {
            power = '12';
        } else if (power === 'K') {
            power = '13';
        } else if (power === 'A') {
            power = '14'
        }

        if (type === 'C') {
            type = '1';
        } else if (type === 'D') {
            type = '2';

        } else if (type === 'H') {
            type = '3';
        } else if (type === 'S') {
            type = '4'
        }



        return Number(power) * Number(type);
    }
    input.forEach(line => {
        let [name, cardsArr] = line.split(': ');
        let splitetCardArr = cardsArr.split(', ');

        if (!playGame[name]) {
            playGame[name] = [];
            splitetCardArr.forEach(card => {
                if (!playGame[name].includes(card)) {
                    playGame[name].push(card)

                }
            });
        } else {
            splitetCardArr.forEach(card => {
                if (!playGame[name].includes(card)) {
                    playGame[name].push(card)
                }
            });
        }
    });

    let points = Object.entries(playGame);

    points.forEach(playersCards => {
        let sumOfPoints = 0;

        playersCards[1].forEach(card => {
            sumOfPoints += cardPoints(card);
        });
        playersCards[1] = sumOfPoints;
    });

    for (let player of points) {
        console.log(`${player[0]}: ${player[1]}`);
    }
}
cardGame([
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD'
])
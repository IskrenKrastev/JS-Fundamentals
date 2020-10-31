function heartDelivery(input) {

    let neighborhood = input.shift().split('@').map(x => Number(x));
    let line = input.shift();
    let index = 0;
    let fullHeart = 0;
    let notFullCount = 0;


    while (line !== 'Love!') {
        let jumpLength = Number(line.split(' ')[1]);
        index += jumpLength;

        if (index >= neighborhood.length) {
            index = 0;
        }
        if (neighborhood[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            neighborhood[index] -= 2

            if (neighborhood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
        line = input.shift();
    }
    console.log(`Cupid's last position was ${index}.`);

    neighborhood.forEach(house => {
        fullHeart += house;
        if (house > 0) {
            notFullCount++
        }
    });
    if (fullHeart === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${notFullCount} places.`);
    }
}
heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
heartDelivery([
    '2@4@2', 'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
]);
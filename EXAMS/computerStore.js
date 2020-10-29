function computerStore(input) {

    let customer = input.pop();
    let sum = 0;
    let totalSum = 0;
    let finalSum = 0;
    let taxes = 0;

    for (let i = 0; i < input.length; i++) {
        let price = Number(input[i]);

        if (price < 0) {
            console.log('Invalid price!');
            continue;
        } else {
            sum += price
        }
    }

    if (sum === 0) {
        console.log('Invalid order !');
    } else {
        taxes = sum * 0.20;
        totalSum = sum + taxes;

        if (customer === 'special') {
            finalSum = totalSum - totalSum * 0.10;
        }
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        if (customer === 'special') {
            console.log(`Total price: ${finalSum.toFixed(2)}$`);

        } else {
            console.log(`Total price: ${totalSum.toFixed(2)}$`);

        }
    }



}
computerStore([
    '1050', '200',
    '450', '2',
    '18.50', '16.86',
    'special'
]);
computerStore([
    '1023', '15',
    '-20', '-5.50',
    '450', '20',
    '17.66', '19.30',
    'regular'
]);
computerStore(['regular']);
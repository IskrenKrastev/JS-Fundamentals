function furniture(input) {

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/;
    let furnitures = [];
    let sum = 0;
    let validName;
    let line = input.shift();

    while (line !== 'Purchase') {

        if ((validName = pattern.exec(line)) !== null) {
            furnitures.push(validName.groups['name']);
            sum += validName.groups['price'] * validName.groups['quantity']
        }
        line = input.shift();
    }

    console.log(`Bought furniture:`);

    if (furnitures.length > 0) {
        console.log(furnitures.join('\n'));
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
function softUniBarIncome(input) {

    let line = input.shift();
    let totalIncome = 0
    let pattern = /\%(?<customer>[A-Z][a-z]+)\%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>\d+([.]\d+)?)\$/

    while (line !== 'end of shift') {

        if (pattern.test(line)) {
            let info = line.match(pattern)
            let currentIncome = (info.groups['quantity'] * info.groups['price']);
            totalIncome += Number(currentIncome)
            console.log(`${info.groups['customer']}: ${info.groups['product']} - ${currentIncome.toFixed(2)}`);
        }
        line = input.shift()
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);
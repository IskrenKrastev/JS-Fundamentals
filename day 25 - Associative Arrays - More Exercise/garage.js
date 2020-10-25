function garage(input) {
    let garages = {};

    input.forEach(line => {

        let [garageNumber, info] = line.split(' - ');
        info = info.split(', ');
        let valueArr = [];

        for (let i = 0; i < info.length; i++) {
            let [key, value] = info[i].split(': ');
            valueArr.push(`${key} - ${value}`)

            if (!garages[garageNumber]) {
                garages[garageNumber] = [];
            }
        }
        garages[garageNumber].push(valueArr)
    });

    Object.entries(garages).forEach(num => {
        console.log(`Garage № ${num[0]}`);

        Object.entries(num[1]).forEach(info => {
            console.log(`--- ${info[1].join(', ')}`);
        });
    });
}
garage([
    '10 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
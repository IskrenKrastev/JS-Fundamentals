function travelTime(input) {

    let travel = {};

    input.forEach(line => {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);
        if (!travel[country]) {
            travel[country] = {};
            travel[country][town] = cost;

        } else {
            if (travel[country][town]) {
                if (travel[country][town] > cost) {
                    travel[country][town] = cost;
                }

            } else {
                travel[country][town] = cost;
            }
        }
    });

    let sortedTravel = Object.entries(travel).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let country of sortedTravel) {
        let townEntries = Object.entries(country[1]);
        let output = ''
        output += country[0] + ' ->';

        for (let town of townEntries) {
            let outputArr = [];
            outputArr.push(town[0], town[1])
            output += ' ' + outputArr.join(' -> ')
        }

        console.log(output);
    }
}
travelTime([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
]);
function armies(input) {

    let army = {};

    input.forEach(line => {

        if (line.split(' ').pop() === 'arrives') {
            let splitetLine = line.split(' ');
            splitetLine.pop()
            let leader = splitetLine.slice(0).join(' ');
            army[leader] = {};

        } else if (Number(line.split(' + ').pop())) {
            let [armyName, moreCount] = line.split(' + ');
            moreCount = Number(moreCount);

            for (let leader in army) {
                if (army[leader][armyName]) {
                    let oldCount = army[leader][armyName];
                    oldCount += moreCount;
                    army[leader][armyName] = oldCount;
                    break;
                }
            }
        } else if (line.split(' ').pop() === 'defeated') {

            for (let leader in army) {
                if (army[leader]) {
                    delete army[leader];
                    break;
                }
            }
        } else {
            let [leader, armyInfo] = line.split(': ');
            let [armyName, armyCount] = armyInfo.split(', ');
            armyCount = Number(armyCount);

            if (army[leader]) {
                army[leader][armyName] = armyCount;
            }
        }
    });



    let totalArmyCount = {};

    Object.entries(army).forEach(leader => {
        let totalCount = 0;
        Object.entries(leader[1]).forEach(line => {
            totalCount += line[1];
        });
        totalArmyCount[leader[0]] = totalCount;
    });




    let sortedTotalCount = Object.entries(totalArmyCount).sort((a, b) => {
        return b[1] - a[1];
    });

    sortedTotalCount.forEach(leader => {
        console.log(`${leader[0]}: ${leader[1]}`);

        let sortedArmy = Object.entries(army[leader[0]]).sort((a, b) => {
            return b[1] - a[1]
        })
        sortedArmy.forEach(a => {
            console.log(`>>> ${a[0]} - ${a[1]}`);
        });

    });
}
armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
])
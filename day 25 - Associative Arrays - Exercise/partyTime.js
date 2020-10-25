function partyTime(input) {
    let vipList = [];
    let regularList = [];
    let guest = input.shift();

    while (guest !== 'PARTY') {
        if (guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57) {
            vipList.push(guest);
        } else {
            regularList.push(guest)
        }
        guest = input.shift();
    }

    input.forEach(name => {
        if (vipList.includes(name)) {
            let nameIndex = vipList.indexOf(name);
            vipList.splice(nameIndex, 1)
        } else if (regularList.includes(name)) {
            let nameIndex = regularList.indexOf(name);
            regularList.splice(nameIndex, 1)
        }
    });

    console.log(vipList.length + regularList.length);
    vipList.forEach(x => console.log(x));
    regularList.forEach(x => console.log(x));
}
partyTime([
    '7IK9Yo0h', '9NoBUajQ',
    'Ce8vwPmE', 'SVQXQCbc',
    'tSzE5t0p', 'PARTY',
    '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc',
])
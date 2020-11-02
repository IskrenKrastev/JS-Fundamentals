function bossRush(input) {

    let n = Number(input.shift());
    let pattern = /\|(?<name>[A-Z]{4,})\|\:\#(?<title>[A-Za-z]+\ [A-Za-z]+)\#/;

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let matched = line.match(pattern);

        if (matched === null) {
            console.log('Access denied!');
        } else {
            console.log(`${matched.groups['name']}, The ${matched.groups['title']}`);
            console.log(`>> Strength: ${matched.groups['name'].length}`);
            console.log(`>> Armour: ${matched.groups['title'].length}`);
        }
    }
}
bossRush([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
]);
bossRush([
    '3',
    '|PETER|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
]);
function wariorsQuest(input) {

    let skill = input.shift();
    let line = input.shift();

    while (line !== 'For Azeroth') {
        let splitedLine = line.split(' ');
        let [command, firstValue, secondValue, thirdValue] = splitedLine;

        switch (command) {

            case 'GladiatorStance':
                skill = skill.toUpperCase();
                console.log(skill);
                break;

            case 'DefensiveStance':
                skill = skill.toLowerCase();
                console.log(skill);
                break;

            case 'Dispel':
                let index = Number(firstValue);
                let letter = secondValue;

                if (skill[index] === undefined) {
                    console.log(`Dispel too weak.`);
                } else {
                    skill = skill.replace(skill[index], letter);
                    console.log(`Success!`);
                }
                break;

            case 'Target':
                let substring = secondValue;
                let secondSubstring = thirdValue;

                if (firstValue === 'Change') {
                    while (skill.includes(substring)) {
                        skill = skill.replace(substring, secondSubstring);
                    }
                    console.log(skill);
                    break;
                } else if (firstValue === 'Remove') {
                    skill = skill.replace(substring, '');
                    console.log(skill);
                    break;
                }

                default:
                    console.log("Command doesn't exist!");
        }
        line = input.shift();
    }
}
wariorsQuest([
    'fr1c710n',
    'GladiatorStance',
    'Dispel 2 I',
    'Dispel 4 T',
    'Dispel 6 O',
    'Dispel 5 I',
    'Dispel 10 I',
    'Target Change RICTION riction',
    'For Azeroth'
]);
wariorsQuest([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
]);
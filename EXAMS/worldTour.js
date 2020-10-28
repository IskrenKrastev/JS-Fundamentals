function worldTour(input) {

    let stops = input.shift();

    let line = input.shift();

    while (line !== 'Travel') {

        let [command, firstValue, secondValue] = line.split(':');
        command = command.split(' ')[0];

        switch (command) {

            case 'Add':
                let index = Number(firstValue);
                let stop = secondValue;
                if (stops[index] !== undefined) {
                    let firstPart = stops.substring(0, index);
                    let secondPart = stops.substring(index);
                    stops = firstPart + stop + secondPart
                }
                console.log(stops);
                break;

            case 'Remove':
                let indexStart = Number(firstValue);
                let indexStop = Number(secondValue);
                if (stops[indexStart] !== undefined && stops[indexStop] !== undefined) {
                    let firstPart = stops.substring(0, indexStart);
                    let secondPart = stops.substring(indexStop + 1);
                    stops = firstPart + secondPart;
                }
                console.log(stops);
                break;

            case 'Switch':
                let oldStop = firstValue;
                let newStop = secondValue;
                if (stops.includes(oldStop)) {
                    stops = stops.replace(oldStop, newStop);
                }
                console.log(stops);
                break;
        }
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);
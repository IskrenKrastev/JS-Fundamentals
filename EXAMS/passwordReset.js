function passReset(input) {

    let pass = input.shift();
    let rawPass = '';
    let line = input.shift();

    while (line !== 'Done') {
        let [command, firstArg, secondArg] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                rawPass = '';
                for (let i = 1; i < pass.length; i += 2) {

                    rawPass += pass[i];
                }

                console.log(rawPass);
                pass = rawPass;

                break;

            case 'Cut':

                let index = Number(firstArg);
                let length = Number(secondArg);

                let substring = pass.substring(index, index + length);
                pass = pass.replace(substring, '');
                console.log(pass);

                break;

            case 'Substitute':

                rawPass = pass;

                while (rawPass.includes(firstArg)) {
                    rawPass = rawPass.replace(firstArg, secondArg);
                }

                if (pass.includes(firstArg)) {
                    console.log(rawPass);
                } else {
                    console.log('Nothing to replace!');
                }
                pass = rawPass;
        }


        line = input.shift();
    }

    console.log(`Your password is: ${pass}`);
}
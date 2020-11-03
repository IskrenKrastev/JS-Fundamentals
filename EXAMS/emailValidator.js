function emailValidator(input) {

    let email = input.shift();
    let line = input.shift();

    while (line !== 'Complete') {

        let [command, firstArg] = line.split(' ');

        if (command === 'Make') {

            if (firstArg === 'Upper') {
                email = email.toUpperCase();
                console.log(email);
            } else {
                email = email.toLowerCase();
                console.log(email);
            }
        } else if (command === 'GetDomain') {
            firstArg = Number(firstArg);
            let substring = email.substring(email.length - firstArg);
            console.log(substring);
        } else if (command === 'GetUsername') {
            let endIndex = email.indexOf('@');
            if (endIndex === -1) {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            } else {
                let username = email.substring(0, endIndex)
                console.log(username);
            }
        } else if (command === 'Replace') {
            while (email.includes(firstArg)) {
                email = email.replace(firstArg, '-');
            }
            console.log(email);
        } else if (command === 'Encrypt') {
            let encrypted = []
            email = email.split('');
            email.forEach(char => {
                encrypted.push(char.charCodeAt());
            });
            console.log(encrypted.join(' '));
        }


        line = input.shift();
    }
}
// emailValidator([
//     'Mike123@somemail.com',
//     'Make Upper',
//     'GetDomain 3',
//     'GetUsername',
//     'Encrypt',
//     'Complete'
// ]);
emailValidator([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
    ''
]);
// emailValidator([
//     'Another@Mail.com',
//     'Make Lower',
//     'GetUsername',
//     'GetDomain 3',
//     'Encrypt',
//     'Complete'
// ])
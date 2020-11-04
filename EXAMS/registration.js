function registration(input) {

    let n = Number(input.shift());
    let pattern = /([U]\$)(?<name>[A-Z][a-z]{2,})(\1)([P]\@\$)(?<pass>[A-Za-z]{5,}\d+)(\4)/;
    let countOfLogs = 0

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let matched = line.match(pattern);

        if (matched !== null) {
            countOfLogs++;
            console.log('Registration was successful');
            console.log(`Username: ${matched.groups['name']}, Password: ${matched.groups['pass']}`);
        } else {
            console.log(`Invalid username or password`);
        }

    }
    console.log(`Successful registrations: ${countOfLogs}`);
}
registration([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
]);
registration(['2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412']);
registration([
    '3',
    'U$myU$-->P@$asdqwe123P@$',
    'Sara 1232412',
    'U$NameU$P@$Pass234P@$'
]);
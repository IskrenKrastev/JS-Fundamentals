function inboxMenager(input) {

    let line = input.shift();
    let users = {};

    while (line !== 'Statistics') {
        let [command, name, msg] = line.split('->');

        if (command === 'Add') {
            if (!users[name]) {
                users[name] = [];
            } else {
                console.log(`${name} is already registered`);
            }
        } else if (command === 'Send') {
            if (users[name]) {
                users[name].push(msg);
            }
        } else if (command === 'Delete') {
            if (users[name]) {
                delete users[name];
            } else {
                console.log(`${name} not found!`);
            }
        }

        line = input.shift();
    }

    let sortedUsers = Object.entries(users).sort((a, b) => {
        return b[1].length - a[1].length || a[0].localeCompare(b[0]);
    });
    console.log(`Users count: ${sortedUsers.length}`);

    for (let user of sortedUsers) {
        console.log(user[0]);
        for (let email of user[1]) {
            console.log(`- ${email}`);
        }
    }
}
inboxMenager([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
]);
inboxMenager([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
]);
inboxMenager([
    'Add->Annie',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Annie->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Annie->Another random test mail',
    'Delete->Annie',
    'Delete->George',
    'Statistics'
]);
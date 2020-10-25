function browserHistory(browser, actionsArr) {

    actionsArr.forEach(action => {

        if (action !== 'Clear History and Cache') {

            let splitedAction = action.split(' ');
            let command = splitedAction[0];
            let site = splitedAction.slice(1).join(' ');

            if (command === 'Open') {
                browser['Open Tabs'].push(site);
                browser['Browser Logs'].push(action)
            } else if (command === 'Close' && browser['Open Tabs'].includes(site) === true) {
                let siteIndex = browser['Open Tabs'].indexOf(site)
                browser['Open Tabs'].splice(siteIndex, 1)
                browser['Recently Closed'].push(site)
                browser['Browser Logs'].push(action)
            }

        } else {
            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];
        }
    });

    console.log(`${browser['Browser Name']}`);
    console.log(`Open Tabs: ${browser['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browser['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browser['Browser Logs'].join(', ')}`);

}
browserHistory({
    'Browser Name': 'Google Chrome',
    'Open Tabs': ['Facebook', 'YouTube', 'Google Translate'],
    'Recently Closed': ['Yahoo', 'Gmail'],
    'Browser Logs': [
        'Open YouTube',
        'Open Yahoo',
        'Open Google Translate',
        'Close Yahoo',
        'Open Gmail',
        'Close Gmail',
        'Open Facebook'
    ]
}, ['Clear History and Cache'])
function extractEmails(input) {
    let line = input.shift();
    let pattern = /(?<user>\w+[\-\.\_]?\w+)\@(?<host>\w+\-?\w+\.[a-z]+\.?[a-z]+)/g;
    let matched = line.match(pattern);
    if (matched !== null) {
        for (let email of matched) {
            console.log(email);
        }
    }
}
extractEmails(['Please contact us at: support@github.com.', 'end']);
extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']);
extractEmails(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'])
function matchDates(arr) {
    input = arr.shift();
    let pattern = /(?<day>\d{2})([.\-/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let validDates = input.matchAll(pattern);

    for (let date of validDates) {
        console.log(`Day: ${date.groups['day']}, Month: ${date.groups['month']}, Year: ${date.groups['year']}`);
    }
}
matchDates([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
])
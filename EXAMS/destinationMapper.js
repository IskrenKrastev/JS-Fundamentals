function destinationMapper(input) {

    let pattern = /([=/])(?<city>[A-Z][A-Za-z]{2,})(\1)/g;
    let validPlaces = input.matchAll(pattern);
    let sum = 0;
    let places = [];

    for (let place of validPlaces) {
        places.push(place.groups['city']);
        sum += place.groups['city'].length
    }
    console.log(`Destinations: ${places.join(', ')}`);
    console.log(`Travel Points: ${sum}`);
}
destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');
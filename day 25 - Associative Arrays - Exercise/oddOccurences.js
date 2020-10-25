function oddOccurences(input) {

    input = input.toLowerCase()

    let occurences = {};
    let elements = input.split(' ');

    elements.forEach(line => {
        let quantity = 1;

        if (occurences[line]) {
            let oldQuantity = occurences[line];
            oldQuantity += quantity;
            occurences[line] = oldQuantity;
        } else {
            occurences[line] = quantity;
        }
    });
    occurences = Object.entries(occurences).sort((a, b) => {
        return b[1] - a[1]
    });

    let filtered = [];

    occurences.forEach(a => {
        if (a[1] % 2 !== 0) {
            filtered.push(a[0])
        }
    });

    console.log(filtered.join(' '));
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
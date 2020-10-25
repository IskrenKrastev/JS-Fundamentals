(function convertObject(input) {
    let stgringToObject = JSON.parse(input);

    for (let key in stgringToObject) {
        console.log(`${key}: ${stgringToObject[key]}`)
    }
})
convertObject(`{"name": "George", "age": 40, "town": "Sofia"}`)
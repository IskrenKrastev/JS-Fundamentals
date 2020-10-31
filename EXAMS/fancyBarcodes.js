function fancyBarcodes(input) {

    let nBacrodes = Number(input.shift());
    let pattern = /\@\#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])\@\#+/;


    for (let i = 0; i < nBacrodes; i++) {
        let barcode = input[i];
        let product;
        let validBarcode = barcode.match(pattern);
        if (validBarcode !== null) {
            let productPatt = /\d/g;
            let productMatch = validBarcode[0].match(productPatt);
            if (productMatch === null) {
                product = '00';
            } else {
                product = productMatch.join('')
            }
            console.log(`Product group: ${product}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }

}
fancyBarcodes(['3', '@#FreshFisH@#', '@###Brea00D@###', '@##Che46sE@##']);
fancyBarcodes([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);
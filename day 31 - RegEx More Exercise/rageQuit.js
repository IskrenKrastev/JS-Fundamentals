function rageQuit(arr) {

    let input = arr.shift();
    let pattern = /(?<text>[^0-9]+)(?<numbers>[0-9]+)/g;
    let matched = input.matchAll(pattern);
    let result = [];
    let unique = [];

    if (matched !== null) {

        for (let match of matched) {

            let text = match.groups['text'];
            text = text.toUpperCase();
            let number = Number(match.groups['numbers']);
            if (number > 0) {

                let splited = text.split('');
                splited.forEach(char => {
                    if (!unique.includes(char)) {
                        unique.push(char)
                    }
                })
                result.push(text.repeat(number));
            }
        }
    }
    console.log(`Unique symbols used: ${unique.length}`);
    console.log(result.join(''));
}
rageQuit(['a3']);
rageQuit(['aSd2&5s@1']);
rageQuit([
    'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
]);
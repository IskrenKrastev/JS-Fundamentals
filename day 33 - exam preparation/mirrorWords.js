function mirrorWords(input) {

    let text = input.shift();
    let pattern = /([@#])(?<word>[A-Za-z]{3,})(\1)(\1)(?<mirrorWord>[A-Za-z]{3,})(\1)/g;
    let mirrorPairs = text.matchAll(pattern);
    let pairs = [];
    let pairsCount = 0;

    for (let line of mirrorPairs) {
        pairsCount++
        let word = line.groups['word'];
        let mirrorWord = line.groups['mirrorWord'];
        let reversedWord = mirrorWord.split('').reverse().join('');
        if (word === reversedWord) {
            pairs.push(`${word} <=> ${mirrorWord}`)
        }
    }

    if (pairsCount === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${pairsCount} word pairs found!`);
    }

    if (pairs.length > 0) {
        console.log('The mirror words are:');
        console.log(pairs.join(', '));
    } else {
        console.log('No mirror words!');
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])
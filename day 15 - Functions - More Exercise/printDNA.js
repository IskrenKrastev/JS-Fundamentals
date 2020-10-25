// function printDNA(num) {
//     let letters = 'ATCGTTAGGG';
//     let dnaLine = ''
//     let firstStar = 2
//     let firstLetter = 0;
//     let dash = 0;
//     let secondLetter = 1;
//     let secondStar = 1;
//     let lastSecondStar = 3

//     dnaLine += '*'.repeat(firstStar) + letters[firstLetter] + '-'.repeat(dash) + letters[secondLetter] + '*'.repeat(secondStar);

//     for (let i = 0; i < num; i++) {

//         console.log(dnaLine);
//         dnaLine = ''


//         if (i < 1) {
//             firstStar -= 1;
//             secondStar -= 1;
//             dash += 2;
//             firstLetter += 2;
//             secondLetter += 2;

//             dnaLine += '*'.repeat(firstStar) + letters[firstLetter] + '-'.repeat(dash) + letters[secondLetter] + '*'.repeat(secondStar);

//         } else {
//             if (lastSecondStar > secondStar) {
//                 lastSecondStar = secondStar
//                 if (secondStar === 0) {
//                     firstStar += 1;
//                     secondStar += 1
//                     dash -= 2
//                 } else {
//                     firstStar -= 1;
//                     secondStar -= 1;
//                     dash += 2;
//                 }

//                 firstLetter += 2;
//                 secondLetter += 2;

//                 if (secondLetter > 9) {
//                     firstLetter = 0;
//                     secondLetter = 1;
//                 }

//                 dnaLine += '*'.repeat(firstStar) + letters[firstLetter] + '-'.repeat(dash) + letters[secondLetter] + '*'.repeat(secondStar);

//             } else if (lastSecondStar < secondStar) {
//                 lastSecondStar = secondStar

//                 if (firstStar === 2) {
//                     firstStar -= 1
//                     secondStar -= 1;
//                     dash += 2
//                 } else {
//                     firstStar += 1;
//                     secondStar += 1;
//                     dash -= 2;
//                 }

//                 firstLetter += 2;
//                 secondLetter += 2;

//                 if (secondLetter > 9) {
//                     firstLetter = 0;
//                     secondLetter = 1;
//                 }

//                 dnaLine += '*'.repeat(firstStar) + letters[firstLetter] + '-'.repeat(dash) + letters[secondLetter] + '*'.repeat(secondStar);
//             }

//         }
//     }


// }


// function printDNA(number) {

//     let str = "ATCGTTAGGG";

//     let counter = 0;

//     for (let i = 0; i < number; i++) {

//         if (i % 4 == 0) {

//             console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`);

//         } else if (i % 4 == 1) {

//             console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);

//         } else if (i % 4 == 2) {

//             console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);

//         } else if (i % 4 == 3) {

//             console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);

//         }

//         counter += 2;

//     }

// }


function printDNA(n) {
    let arr = 'ATCGTTAGGG'.split('')
    for (let i = 1; i <= n; i++) {
        let [a, b] = arr.splice(0, 2)
        if (i === 1 || i % 4 === 1) {
            console.log(`**${a}${b}**`);
        } else if (i === 2 || i % 4 === 2) {
            console.log(`*${a}--${b}*`);
        } else if (i === 3 || i % 4 === 3) {
            console.log(`${a}----${b}`);
        } else if (i === 4 || i % 4 === 0) {
            console.log(`*${a}--${b}*`);
        }

        arr.push(a)
        arr.push(b)
    }
}

printDNA(10);
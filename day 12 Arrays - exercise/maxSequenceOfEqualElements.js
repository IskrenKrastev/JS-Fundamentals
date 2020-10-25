function maxSequenceOfEqualElements(numbers) {
    let indexOfBiggestSeq = -1;
    //индекса на най-голямата поредица

    let maxSeqLength = 0;
    //броя на най-голямата поредица

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
        //взимаме текущия елемент

        let currentSeqLength = 1;
        //дължината на текущата поредица, ще започне от 1

        for (let j = i + 1; j < numbers.length; j++) {
            //проверяваме всеки ДЕСЕН елемент от текущия елемент

            let nextNum = numbers[j];
            //това е десният елемент

            if (currentNum !== nextNum) {
                break;
                //ако не са еднакви, прекъсваме цикъла
            } else {
                currentSeqLength++
                //ако са еднакви - увеличаваме броя на ТЕКУЩАТА поредица
            }


        }
        if (currentSeqLength > maxSeqLength) {
            //проверяваме дали ТЕКУЩАТА дължина е по- голяма от МАКСИМАЛНАТА


            maxSeqLength = currentSeqLength;
            // ако е по голяма ,схемата е като за maxNumber

            indexOfBiggestSeq = i;
            //съответно променяме стойността на числото с най -голям индейкс
        }
    }

    let element = numbers[indexOfBiggestSeq];
    console.log(`${element} `.repeat(maxSeqLength));

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
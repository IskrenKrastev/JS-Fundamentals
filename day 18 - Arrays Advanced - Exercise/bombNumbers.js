function bombNumbers(firstArr, secondArr) {

    let [target, power] = secondArr;


    for (let i = 0; i < firstArr.length; i++) {
        let currentNum = firstArr[i];


        if (currentNum === target) {
            let start = Math.max(0, i - power); // ще избере максималното от 0 и другото число
            let end = Math.min(i + power, firstArr.length - 1); // ще ибере минималното от числото и края на масива

            //     for (let j = start; j <= end; j++) {
            //         firstArr[j] = 0;
            //     }
            // }

            firstArr.splice(start, power * 2 + 1);
            i = 0;
        }

    }


    let sum = 0;


    for (let l = 0; l < firstArr.length; l++) {

        if (firstArr[l] !== 0) {
            sum += firstArr[l]
        }
    }



    console.log(sum);

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
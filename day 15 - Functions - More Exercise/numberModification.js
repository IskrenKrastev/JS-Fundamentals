function numberModification(number) {
    // let averageSum = 0;
    // number = number.toString()
    // let myArrNum = [...number]
    // let counter = number.length;

    // function isAverage(number) {
    //     while (averageSum !== 5) {
    //         for (let i of myArrNum) {
    //             averageSum += Number(i);
    //         }
    //         if (averageSum / counter >= 5) {
    //             break;
    //         } else {

    //             myArrNum.push(9);
    //             counter++
    //             averageSum = 0;
    //         }
    //     }
    //     return myArrNum.join('');

    // }
    // console.log(isAverage(number));



    let isAverage = num => num.toString().split('').map(Number).reduce((a, b) => a + b, 0) / num.toString().length;
    while (isAverage(number) < 5) {
        number += '9';
    }
    console.log(number);


}
numberModification(101)
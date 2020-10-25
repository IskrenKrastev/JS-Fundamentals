function cutAndReverse(text) {

    let length = text.length;

    let firstHalf = text.slice(0, length / 2);
    firstHalf = firstHalf.split('').reverse();

    let secondHalf = text.slice(length / 2);
    secondHalf = secondHalf.split('').reverse();

    console.log(firstHalf.join(''));
    console.log(secondHalf.join(''));

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
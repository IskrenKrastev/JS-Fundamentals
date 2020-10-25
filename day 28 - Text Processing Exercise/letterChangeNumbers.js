function letterChangeNumbers(input) {


    input = input.trim().split(/\s+/);

    let sum = 0;

    function firstLetterPosition(firstLetter) {
        let firstPosition = 0;

        firstLetter = firstLetter.toUpperCase();
        firstPosition = firstLetter.charCodeAt() - 64

        return firstPosition;
    }

    function lastLetterPosition(lastLetter) {
        let lastPosition = 0;
        lastLetter = lastLetter.toUpperCase();
        lastPosition = lastLetter.charCodeAt() - 64;
        return lastPosition;
    }

    input.forEach(el => {

        let firstLetter = el[0];
        let lastLetter = el[el.length - 1];
        let num = el.substring(1, el.length - 1);
        num = Number(num);


        if (firstLetter === firstLetter.toUpperCase()) {
            num = num / firstLetterPosition(firstLetter);
        } else {
            num = num * firstLetterPosition(firstLetter);
        }

        if (lastLetter === lastLetter.toUpperCase()) {
            num = num - lastLetterPosition(lastLetter);
        } else {
            num = num + lastLetterPosition(lastLetter)
        }

        sum += num
    });

    console.log(sum.toFixed(2));
}
letterChangeNumbers('A12b s17G');
letterChangeNumbers('P34562Z q2576f   H456z');
letterChangeNumbers('a1A');
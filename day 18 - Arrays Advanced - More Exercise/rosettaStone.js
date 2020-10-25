function rosettaStone(arr) {
    let lengthOfTemplate = arr.shift();
    let template = [];
    let sum = 0;
    let matrix;
    let iCount = -1


    function letterChange() {
        let num = 0;
        let letterValue = 0;
        let letter = '';
        while (letterValue <= sum) {

            if (num === 27) {
                num = 0;
            }
            switch (num) {
                case 0:
                    letter = ' ';
                    break;
                case 1:
                    letter = 'A';
                    break;
                case 2:
                    letter = 'B'
                    break;
                case 3:
                    letter = 'C'
                    break;
                case 4:
                    letter = 'D'
                    break;
                case 5:
                    letter = 'E'
                    break;
                case 6:
                    letter = 'F'
                    break;
                case 7:
                    letter = 'G'
                    break;
                case 8:
                    letter = 'H'
                    break;
                case 9:
                    letter = 'I'
                    break;
                case 10:
                    letter = 'J'
                    break;
                case 11:
                    letter = 'K'
                    break;
                case 12:
                    letter = 'L'
                    break;
                case 13:
                    letter = 'M'
                    break;
                case 14:
                    letter = 'N'
                    break;
                case 15:
                    letter = 'O'
                    break;
                case 16:
                    letter = 'P'
                    break;
                case 17:
                    letter = 'Q'
                    break;
                case 18:
                    letter = 'R'
                    break;
                case 19:
                    letter = 'S'
                    break;
                case 20:
                    letter = 'T'
                    break;
                case 21:
                    letter = 'U'
                    break;
                case 22:
                    letter = 'V'
                    break;
                case 23:
                    letter = 'W'
                    break;
                case 24:
                    letter = 'X'
                    break;
                case 25:
                    letter = 'Y'
                    break;
                case 26:
                    letter = 'Z'
                    break;


            }
            num++
            letterValue++;
        }

        return letter;
    }

    for (let a = 0; a < lengthOfTemplate; a++) {
        template.push(arr.shift().split(' ').map(x => Number(x)));
        matrix = arr.map(a => a.split(' ').map(x => Number(x)));
    }

    for (let k = 0; k < template.length; k++) {

        let counter = 0;

        iCount++;

        for (let i = iCount; i < matrix.length; i++) {

            for (let j = 0; j < matrix[i].length; j++) {


                sum = matrix[i][j] + template[k][counter]
                matrix[i].splice(j, 1, sum);
                matrix[i].splice(j, 1, letterChange());
                counter++;
                if (counter > template[k].length - 1) {
                    counter = 0;
                }
            }
            counter = 0;
            matrix[i] = matrix[i].join('');

            if (template.length > 1) {
                if (k >= template.length - 1) {
                    k = -1;
                }
                break;
            } else {
                if (k > template.length - 1) {
                    k = -1;
                }
            }
        }

    }
    console.log(matrix.join(''));
}
rosettaStone([
    '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'
]);
rosettaStone([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
])
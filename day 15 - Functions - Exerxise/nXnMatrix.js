function nXnMatrix(num) {

    //     let col = []
    //     for (let i = 0; i < num; i++) {
    //         col.push(num)
    //     }

    //     let row = [];
    //     for (let i = 0; i < num; i++) {
    //         row.push(col.join(' '))
    //     }

    //     console.log(row.join('\n'));

    function printRow() {
        let row = '';
        for (let i = 0; i < num; i++) {
            row += num + ' ';
        }
        return row;
    }

    for (let i = 0; i < num; i++) {
        console.log(printRow(num));
    }
}
nXnMatrix(3)
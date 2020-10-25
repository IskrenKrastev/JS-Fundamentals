function sortArrayBy2Criteria(arr) {


    // console.log(sorted().join('\n'));

    // function sorted() {
    //     return arr.sort((a, b) => {
    //         if (a.length === b.length) {
    //             return a.localeCompare(b);
    //         } else {
    //             return a.length - b.length
    //         }
    //     });
    // }


    let sorted = arr.sort(sortNames);
    console.log(sorted.join('\n'));

    function sortNames(a, b) {
        let firtsCriteria = a.length - b.length;
        if (firtsCriteria === 0) {
            return a.localeCompare(b);
        }
        return firtsCriteria;
    }
}
sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);
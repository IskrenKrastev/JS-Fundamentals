function addAndRemove(arr) {
    let newArray = [];
    let lastNum;
    for (let i = 0; i < arr.length; i++) {

        lastNum = i + 1;
        if (arr[i] === 'add') {

            newArray.push(lastNum)
        } else if (arr[i] === 'remove') {
            newArray.pop()
        }



    }
    if (newArray.length <= 0) {
        console.log('Empty');

    } else {
        console.log(newArray.join(' '));
    }


}
addAndRemove(['remove', 'remove', 'remove'])
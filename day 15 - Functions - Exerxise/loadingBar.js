function loadingBar(num) {

    if (num === 100) {
        console.log('100% Complete!');
        console.log(`[%%%%%%%%%%]`)
    } else {
        function firstStillLoad() {
            let percent = num / 10;
            let firstLine = num + '%' + ' [' + '%'.repeat(percent) + ".".repeat(10 - percent) + ']'
            return firstLine;
        }
        console.log(firstStillLoad(num))
        console.log('Still loading...');
    }
}
loadingBar(100);
loadingBar(0)
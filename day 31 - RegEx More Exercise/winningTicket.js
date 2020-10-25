function winningTicket(arr) {

    let input = arr.shift();
    let inputPatt = /[^\,\s]+/g;
    let tickets = input.match(inputPatt);

    for (let ticket of tickets) {

        if (ticket.length !== 20) {
            console.log('invalid ticket');

        } else {
            let winningPattern = /[@]{6,10}|[#]{6,10}|[$]{6,10}|[\^]{6,10}/g;
            let leftSide = ticket.substring(0, 10);
            let rigthSide = ticket.substring(10);
            let leftMatch = leftSide.match(winningPattern);
            let rightMAtch = rigthSide.match(winningPattern);

            if ((leftMatch === null || rightMAtch === null) || leftMatch[0][0] !== rightMAtch[0][0]) {
                console.log(`ticket "${ticket}" - no match`);

            } else {
                if (leftMatch[0].length === 10 && rightMAtch[0].length === 10) {
                    console.log(`ticket "${ticket}" - ${ticket.match(winningPattern)[0].length}${ticket.match(winningPattern)[0][0]} Jackpot!`);
                } else {
                    let minLength = leftMatch[0].length;

                    if (rightMAtch[0].length < minLength) {
                        minLength = rightMAtch[0].length
                    }
                    console.log(`ticket "${ticket}" - ${minLength}${ticket.match(winningPattern)[0][0]}`);
                }
            }
        }
    }
}
winningTicket(['$$$$$$$$@@@@@@$$$$$$']);
winningTicket(['$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo$$$$$$ey']);
winningTicket(['validticketnomatch:(']);
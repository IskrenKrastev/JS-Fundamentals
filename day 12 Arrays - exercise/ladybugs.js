function ladybugs(arr) {
    let cells = arr[0];
    let startPositions = arr[1];
    startPositions = startPositions.split(" ");
    let moves = arr.slice(2);
    //старт от втора ПОЗИЦИЯ, няма зададена крайна , така че е до края
    let field = [];

    for (let i = 0; i < cells; i++) {
        // пълним полетата (клетките) с нули 
        field.push(0);
    }

    for (let i = 0; i < startPositions.length; i++) {
        let position = Number(startPositions[i]);
        if (position > field.length - 1) {
            continue;
        }
        field[position] = 1;
    }


    for (let i = 0; i < moves.length; i++) {
        let currentCommand = moves[i];
        currentCommand = currentCommand.split(" ");

        let position = Number(currentCommand[0]);
        let direction = currentCommand[1];
        let flyCount = Number(currentCommand[2]);

        if (field[position] === 0 ||
            position < 0 ||
            position > field.length - 1) {
            continue;
        }

        field[position] = 0;

        if (flyCount < 0) {
            direction = direction === "right" ? "left" : "right";
            flyCount = Math.abs(flyCount);
        }

        let nextPosition = 0;

        if (direction === "right") {
            nextPosition = position + flyCount;
        } else if (direction === "left") {
            nextPosition = position - flyCount;
        }

        while (field[nextPosition] === 1) {
            if (direction === "right") {
                nextPosition += flyCount;
            } else if (direction === "left") {
                nextPosition -= flyCount;
            }
        }

        if (nextPosition > field.length - 1 || nextPosition < 0) {
            continue;
        }

        field[nextPosition] = 1;
    }

    console.log(field.join(" "));
}
ladybugs([3, '0 1', '0 right 1', '2 right 1'])
function radioCrystals(arr) {
    let perfectCrystal = arr[0];

    let cut = cutted => cutted / 4;
    let lap = lapped => lapped * 0.80;
    let grind = grinded => grinded - 20;
    let etch = etched => etched - 2;

    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;
    let xRayCounter = 0;


    for (let i = 1; i < arr.length; i++) {

        let roughCrystal = arr[i];

        console.log(`Processing chunk ${roughCrystal} microns`);

        while (roughCrystal !== perfectCrystal) {

            if (cut(roughCrystal) >= perfectCrystal || cut(roughCrystal) === perfectCrystal - 1) {
                roughCrystal /= 4;
                cutCounter++;
            } else if (lap(roughCrystal) >= perfectCrystal || lap(roughCrystal) === perfectCrystal - 1) {
                roughCrystal *= 0.80;

                if (lapCounter < 1) {
                    roughCrystal = Math.floor(roughCrystal)
                }

                lapCounter++;

            } else if (grind(roughCrystal) >= perfectCrystal || grind(roughCrystal) === perfectCrystal - 1) {
                roughCrystal -= 20;

                if (grindCounter < 1) {
                    roughCrystal = Math.floor(roughCrystal);
                }

                grindCounter++;

            } else if (etch(roughCrystal) >= perfectCrystal || etch(roughCrystal) === perfectCrystal - 1) {
                roughCrystal -= 2;

                if (etchCounter < 1) {
                    roughCrystal = Math.floor(roughCrystal);
                }

                etchCounter++;

            } else if (roughCrystal === perfectCrystal - 1) {
                roughCrystal += 1
                xRayCounter++;
            }

        }
        if (cutCounter > 0) {
            console.log(`Cut x${cutCounter}`);
            console.log(`Transporting and washing`);
        }

        if (lapCounter > 0) {
            console.log(`Lap x${lapCounter}`);
            console.log(`Transporting and washing`);
        }

        if (grindCounter > 0) {
            console.log(`Grind x${grindCounter}`);
            console.log(`Transporting and washing`);
        }

        if (etchCounter > 0) {
            console.log(`Etch x${etchCounter}`);
            console.log(`Transporting and washing`);
        }

        if (xRayCounter > 0) {
            console.log(`X-ray x${xRayCounter}`)
        }

        console.log(`Finished crystal ${roughCrystal} microns`)

        cutCounter = 0;
        lapCounter = 0;
        grindCounter = 0;
        etchCounter = 0;
        xRayCounter = 0;

    }

}
radioCrystals([1000, 4000, 8100])
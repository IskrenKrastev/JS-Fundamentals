function netherRealms(input) {
    input = input[0].split(', ');
    input = input.sort((a, b) => {
        return a.localeCompare(b);
    });


    for (let deamon of input) {

        let totalHealth = 0;
        let totalDamage = 0;

        let letterPatt = /[^\d.\-+*/]/g;
        let numPatt = /([\-+*/]*[0-9]+(.\d+)?)/g;
        let operdandsPatt = /[*/]/g;

        let health = deamon.match(letterPatt);
        let damage = deamon.match(numPatt);
        let operands = deamon.match(operdandsPatt);

        if (health !== null) {

            health.forEach(char => {
                let asciiValue = char.charCodeAt();
                totalHealth += asciiValue
            });
        }
        if (damage !== null) {
            damage.forEach(num => {
                totalDamage += Number(num)
            });
        }

        if (operands !== null) {
            operands.forEach(sign => {
                if (sign === '*') {
                    totalDamage *= 2;
                } else {
                    totalDamage /= 2;
                }
            });
        }
        console.log(`${deamon} - ${totalHealth} health, ${totalDamage.toFixed(2)} damage`);
    }

}
netherRealms(['M3ph-0.5s-0.5t0.0**']);
netherRealms(['M3ph1st0**, Azazel']);
netherRealms(['Gos/ho'])
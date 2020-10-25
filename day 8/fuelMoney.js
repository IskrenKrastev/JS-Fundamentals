function fuelMoney (distance, passengers,priceForLitter){
    let neededFuel = distance / 100 * 7;
    neededFuel += passengers * 0.100
    let neededMoney = neededFuel * priceForLitter

    console.log(`Needed money for that trip is ${neededMoney}lv.`)
}
fuelMoney(260,9,2.49)
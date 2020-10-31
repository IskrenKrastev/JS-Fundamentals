function pirates(input) {

  let targetedCities = {};
  let line = input.shift();

  while (line !== 'Sail') {

    let [town, population, gold] = line.split('||');
    population = Number(population);
    gold = Number(gold);

    if (!targetedCities[town]) {
      targetedCities[town] = {
        population: population,
        gold: gold
      }
    } else {
      targetedCities[town].population += population;
      targetedCities[town].gold += gold;
    }

    line = input.shift();
  }
  line = input.shift();

  while (line !== 'End') {

    let [command, town, firstValue, secondValue] = line.split('=>');
    firstValue = Number(firstValue);
    secondValue = Number(secondValue);

    if (command === 'Plunder') {
      targetedCities[town].population -= firstValue;
      targetedCities[town].gold -= secondValue;
      console.log(`${town} plundered! ${secondValue} gold stolen, ${firstValue} citizens killed.`);

      if (targetedCities[town].population === 0 || targetedCities[town].gold === 0) {
        delete targetedCities[town];
        console.log(`${town} has been wiped off the map!`);
      }
    } else if (command === 'Prosper') {

      if (firstValue < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        targetedCities[town].gold += firstValue;
        console.log(`${firstValue} gold added to the city treasury. ${town} now has ${targetedCities[town].gold} gold.`);
      }

    }

    line = input.shift();
  }

  let sortedTowns = Object.entries(targetedCities).sort((a, b) => {
    return targetedCities[b[0]].gold - targetedCities[a[0]].gold || a[0].localeCompare(b[0])
  });

  if (sortedTowns.length !== 0) {
    console.log(`Ahoy, Captain! There are ${sortedTowns.length} wealthy settlements to go to:`);

    for (let town of sortedTowns) {
      console.log(`${town[0]} -> Population: ${targetedCities[town[0]].population} citizens, Gold: ${targetedCities[town[0]].gold} kg`);
    }

  } else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
  }

}
pirates([
  'Tortuga||75000||380',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'End'
]);
pirates([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End'
]);
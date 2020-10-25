function systemRegister(input) {

    let register = {};

    for (let line of input) {

        let [systemName, componentName, subComponentName] = line.split(' | ');

        if (!register.hasOwnProperty(systemName)) {
            register[systemName] = {};
        }

        if (!register[systemName].hasOwnProperty(componentName)) {
            register[systemName][componentName] = [];

        }
        register[systemName][componentName].push(subComponentName);

    }

    let sortedKeys = Object.keys(register).sort((a, b) =>
        Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b));

    sortedKeys.forEach(key => {
        console.log(key);

        let sortedSubKeys = Object.keys(register[key]).sort((a, b) =>
            Object.keys(register[key][b]).length - Object.keys(register[key][a]).length);

        sortedSubKeys.forEach((subkey) => {
            console.log(`|||${subkey}`);
            register[key][subkey].forEach(subComponent => {
                console.log(`||||||${subComponent}`);
            });
        });
    });


}
systemRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])
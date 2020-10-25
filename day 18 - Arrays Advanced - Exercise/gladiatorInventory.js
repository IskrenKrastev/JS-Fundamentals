function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    let command;
    let equip;

    function buy() {
        if (!inventory.includes(equip)) {
            inventory.push(equip);
        }
        return inventory;
    }

    function trash() {
        let index = inventory.indexOf(equip);
        if (index >= 0) {
            inventory.splice(index, 1);
        }
        return arr;
    }

    function reapir() {
        if (inventory.includes(equip)) {
            let index = inventory.indexOf(equip);
            let movedElement = inventory[index];
            inventory.splice(index, 1);
            inventory.push(movedElement);
        }
        return inventory;
    }

    function upgrade() {
        let upgraded = equip.split('-');
        let [currentEquip, currentUp] = upgraded;
        if (inventory.includes(currentEquip)) {
            let index = inventory.indexOf(currentEquip);
            inventory.splice(index + 1, 0, `${currentEquip}:${currentUp}`);
        }
        return inventory;
    }

    for (let i = 0; i < arr.length; i++) {
        let moves = arr[i].split(' ');
        command = moves[0];
        equip = moves[1];


        switch (command) {
            case 'Buy':
                buy();
                break;
            case 'Trash':
                trash();
                break;
            case 'Repair':
                reapir();
                break;
            case 'Upgrade':
                upgrade();
                break;
        }
    }
    console.log(inventory.join(' '));

}
gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);

//   gladiatorInventory([
//     'SWORD Shield Spear',
//     'Trash Bow',
//     'Repair Shield',
//     'Upgrade Helmet-V'
//   ]);
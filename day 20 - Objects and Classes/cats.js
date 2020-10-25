function printCatsInfo(arr) {
    class Cat {
        constructor(name, age) {
            this.catsName = name;
            this.catsAge = age;

        }
        meow() {
            console.log(`${this.catsName}, age ${this.catsAge} says Meow`);
        }
    }




    for (let i = 0; i < arr.length; i++) {
        let [name, age] = arr[i].split(' ');

        let cats = new Cat(name, age);

        cats.meow();
    }
}
printCatsInfo(['Mellow 2', 'Tom 5']);
//Liskov substitution principle (LSP)
// мы можем взять дочерний класс и заменить этим классом род. класс без проблем
//
// class Animal {
//     constructor(attrs) {
//         this.attrs = attrs
//     }
//
//     eat() {
//         console.log("A te food!")
//     }
// }
//
// class Cat extends Animal {
//     eat(amount) {
//         if (amount >= 0.3) {
//             console.log("Can't eat that much!")
//         } else {
//             console.log("Ate some cat food!")
//         }
//     }
// }
//
// class Dog extends Animal {
//     eat() {
//         console.log("Ate some dog food!")
//     }
// }
//
//
// const pluto = new Dog({name: "Pluto", age: 3})
// const goofy = new Dog({name: "Goofy", age: 2})
// const buttons = new Cat(["Mr. Buttons", 4])
//
// const animals = [pluto, goofy, buttons]
//
// animals.forEach((animals) => {
//     if (animals.attrs.age > 2) console.log(animals)
// })

// --------------------------------------------------------------------------------------------------

class Animal {
    constructor(attrs) {
        const {name, age} = attrs

        this.name = name
        this.age = age
    }

    eat(_amount = 0) {
        console.log("A te food!")
    }
}
// получается что род. класс Animal можем заменить  на доч. Cat
class Cat extends Animal {
    constructor(attrs) {
        super(attrs);
    }
    eat(amount) {
        if (amount >= 0.3) {
            console.log("Can't eat that much!")
        } else {
            console.log("Ate some cat food!")
        }
    }
}

class Dog extends Animal {
    constructor(attrs) {
        super(attrs);
    }
    eat(_amount = 0) {
        console.log("Ate some dog food!")
    }
}

const pluto = new Dog({name: "Pluto", age: 3})
const goofy = new Dog({name: "Goofy", age: 2})
const buttons = new Cat({name: "Mr. Buttons", age: 4})

const animals = [pluto, goofy, buttons]

animals.forEach((animals) => {
    if (animals.age > 2) console.log(animals)
})
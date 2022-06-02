// Interface segregation principle (ISP)
// те классы которые наследуются от базового класса
// если они не используют методы базового класса
// то не должны от них зависить

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     walk() {
//         console.log(`${this.name} умеет ходить `)
//     }
//
//     swim() {
//         console.log(`${this.name} умеет плавать `)
//     }
//
//     fly() {
//         console.log(`${this.name} умеет летать `)
//     }
// }
//
// class Dog extends Animal {
//     fly() {
//         return null
//     }
// }
//
// class Eagle extends Animal {
//     swim() {
//         return null
//     }
// }
//
// class Whale extends Animal {
//     fly() {
//         return null
//     }
//     walk() {
//         return null
//     }
// }
//
// const dog = new Dog('Rayli')
//
// dog.walk()
// dog.swim()
// dog.fly()
//
// const eagle = new Eagle('Oreol')
//
// eagle.fly()
// eagle.walk()
// eagle.swim()
//
// const whale = new Whale('Kit')
//
// whale.fly()
// whale.walk()
// whale.swim()

// =====================================================================================

class Animal {
    constructor(name) {
        this.name = name
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} умеет плавать `)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} умеет летать `)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} умеет ходить `)
    }
}
// нет лишниш элементов повидения
class Dog extends Animal{}
class Eagle extends Animal{}
class Whale extends Animal{}

//  копирует свойства из всех аргументов в первый объект.
Object.assign(Dog.prototype,swimmer,walker)
Object.assign(Eagle.prototype,flier,walker)
Object.assign(Whale.prototype,swimmer)

const dog = new Dog('Rayli')
dog.walk()
dog.swim()

const eagle = new Eagle('Oreol')
eagle.fly()
eagle.walk()

const whale = new Whale('Kit')
whale.swim()

// Single responsibility principle (SRP)
// Прицип говорит что у класов должна быть единая зона отвествености
// т.е 1 клсс должен заниматься 1 вещью , не нада создават 1 гиганский класс

//
// //нарушение SRP (много на себя берёт)
// class Person {
//     static tax = 0.13
//
//     constructor(name, age, gross_salary) {
//         this.name = name
//         this.age = age
//         this.gross_salary = gross_salary
//     }
// // считаем зп
//     netWage() {
//         return this.gross_salary - this.gross_salary * Person.tax
//     }
// // сохраняем в бд
//     saveDb() {
//         console.log('Connecting to database...')
//         console.log('Saving to database...')
//     }
// }
//
// const person = new Person("John Doe", 30, 4000)
//
// console.log(person.netWage())
// person.saveDb()


// разделение зоны отвествености на 2 разныех класса
class PersonDbProvider {
    constructor(person) {
        this.person = person
    }
    validate() {
        console.log("Validate...")
    }
        // сохраняем в бд
    save() {
        console.log('Connecting to database...')
        console.log('Saving to database...')
    }
}

class Person {
    static tax = 0.13

    constructor(name, age, gross_salary) {
        this.name = name
        this.age = age
        this.gross_salary = gross_salary
    }
// считаем зп
    netWage() {
        return this.gross_salary - this.gross_salary * Person.tax
    }

}

const person = new Person("John Doe", 30, 4000)

console.log(person.netWage())

const db_provider = new PersonDbProvider(person)
db_provider.save()
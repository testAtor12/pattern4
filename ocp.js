// Open-closed principle (OCP)
// код открыт для расширение но по возможности закрыт  для модификации

// class Square {
//     constructor(size) {
//         this.type = 'square'
//         this.size = size
//     }
// }
//
// class Circle {
//     constructor(radius) {
//         this.type = "circle"
//         this.radius = radius
//     }
// }
//
// class AreaColculator {
//     constructor(shapes = []) {
//         this.shapes = shapes
//     }
//
//     sum() {
//         return this.shapes.reduce((acc,shape) => {
//             if (shape.type === "circle") {
//                 acc += (shape.radius ** 2) * Math.PI
//             } else if (shape.type === 'square') {
//                 acc += shape.size ** 2
//             }
//             return acc
//         },0)
//     }
// }
//
// const calc =  new AreaColculator([
//     new Square(10),
//     new Circle(1),
//     new Circle(5)
// ])
//
// console.log(calc.sum())

// ==============================================================================================

// class Square {
//     constructor(size) {
//         this.type = 'square'
//         this.size = size
//     }
// }
//
// class Circle {
//     constructor(radius) {
//         this.type = "circle"
//         this.radius = radius
//     }
// }
//
// class Rect {
//     constructor(width, height) {
//         this.type = 'rect'
//         this.width = width
//         this. height = height
//     }
// }
//
// class AreaColculator {
//     constructor(shapes = []) {
//         this.shapes = shapes
//     }
//
//     sum() {
//         return this.shapes.reduce((acc,shape) => {
//             if (shape.type === "circle") {
//                 acc += (shape.radius ** 2) * Math.PI
//             } else if (shape.type === 'square') {
//                 acc += shape.size ** 2
//             } else if (shape.type === 'rect') {
//                 acc += shape.width * shape.height
//             }
//             return acc
//         },0)
//     }
// }
//
// const calc =  new AreaColculator([
//     new Square(10),
//     new Circle(1),
//     new Circle(5),
//     new Rect(10, 20)
// ])
//
// console.log(calc.sum())


// ===============================================================================================

class Shape {
    area () {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        this.size = size
    }
    area() {
        return this.size ** 2
    }
}

class Circle extends Shape{
    constructor(radius) {
        super()
        this.radius = radius
    }
    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape{
    constructor(width, height) {
        super()
        this.width = width
        this. height = height
    }
    area() {
        return this.width * this.height
    }
}

class AreaColculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }
// закрыли для модификации
    sum() {
        return this.shapes.reduce((acc,shape) => {
            acc += shape.area()
            return acc
        },0)
    }
}
// открываем для расширения AreaColculator
const calc =  new AreaColculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(10, 20)
])

console.log(calc.sum())



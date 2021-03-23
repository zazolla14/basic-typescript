// ? ABSTRACK Class yaitu class yang tidak dapat diiniasi kan langsung, tetapi wajib di EXTENDS ke class chilrend nya
abstract class Vihicle {
    abstract wheels: number

    start(): void {
        console.log("MBRERRRR")
    }
}

class Car extends Vihicle {
    wheels: number = 4
}
let car = new Car()
console.log(car)
console.log(car.wheels)
car.start()

class Motorcycle extends Vihicle {
    wheels: number = 2
}
let motorcycle = new Motorcycle()
console.log(motorcycle)
motorcycle.start()
console.log(motorcycle.wheels)

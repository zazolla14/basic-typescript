// TODO clas dengan mendefinikan PROPERTY (public .....)
export class TestUser {
    public name: string
    public age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
const azola = new TestUser("Azola", 22)
console.log(azola)
console.log(`Hallo my name ${azola.name} and iam ${azola.age} olds`)

// TODO class tanpa mendefinikan PROPERTY
export class Book {
    constructor(public name: string, public code: number) {}
}
const SH01 = new Book("Harry Potter", 2210)
console.log(SH01)
console.log(`Name : ${SH01.name}, code : ${SH01.code}`)

export class Person {
    constructor(public name: string, public age: number) {}

    printName(): string {
        return this.name
    }

    printAge(): void {
        console.log(`Iam ${this.age} olds`)
    }
}
const dety = new Person("Dety", 21)
console.log(dety)
console.log(`Hallo my name ${dety.printName()}`)
dety.printAge()
console.log("\n\n")

// TODO Inheritance
// ? Extendents mewariskan semua method yang ada diclass Parent nya
// ? Public = bisa diakses disemua class atau dari luar class tersebut
// ? protected = hanya bisa diakses oleh class itu sendiri dan class children nya
// ? private = hanya dapat diakses oleh clas itu saja

export class User {
    name: string

    constructor(name: string, public age: number) {
        this.name = name
    }

    setName(value: string): void {
        this.name = value
    }

    getName = (): string => {
        return this.name
    }
}
let zolla = new User("Zolla", 21)
console.log(zolla)
zolla.setName("Dety")
console.log(zolla.getName())
console.log("\n")

// TODO Inheritance tanpa menggunakan Contractor
// class Admin extends User {
//     write: boolean = true
//     read: boolean = true

//     getRoles(): { write: boolean; read: boolean } {
//         return {
//             write: this.write,
//             read: this.read,
//         }
//     }
// }
// let admin = new Admin("Azola", 22)

// TODO Inheritance menggunakan Super() contraktor
class Admin extends User {
    write: boolean = true
    read: boolean = true
    phone: number // ! [1] merupakan property tambahan pada class Admin()
    constructor(phone: number, name: string, age: number) {
        // ! [3] kemudian class Admin() membuat contraktor sendiri dengan membawa properti parent-nya
        super(name, age) // ! [2] digunakan untuk memanggil property pada class Parent-nya (User())
        this.phone = phone
    }

    getRoles(): { write: boolean; read: boolean } {
        return {
            write: this.write,
            read: this.read,
        }
    }
}
let admin = new Admin(62131412, "Azola", 22)
console.log(admin)
console.log(admin.name)
console.log(admin.age)
console.log(admin.phone) // ! [4 ]sehingga objeck admin dapat memanggil parameter baru
console.log(admin.write)
console.log(admin.read)
admin.setName("Dety")
console.log(admin.getName())
console.log(admin.getRoles())
console.log(admin.getRoles().write)
console.log(admin.getRoles().read)

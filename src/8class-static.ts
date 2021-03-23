// ! sebuah fungsi yang memungkin sebuat PARAMETER atau METHOD agar dapat diakses tanpa harus menginiasikan clas terlebih dahulu
export class User {
    age: number
    constructor(public name: string, age: number) {
        this.age = age
    }

    setName(value: string) {
        this.name = value
    }

    getName(): string {
        return this.name
    }
}

class Admin extends User {
    read: boolean = true
    write: boolean = true
    phone: number
    private _email: string = ""
    static gender: string = "HAI" // ! [1] STATIC Parameter

    constructor(phone: number, name: string, age: number) {
        super(name, age)
        this.phone = phone
    }

    // ! [2] STATIC Method
    static sayHai() {
        return "Say Hai"
    }

    getRoles(): { read: boolean; write: boolean } {
        return {
            read: this.read,
            write: this.write,
        }
    }

    set email(value: string) {
        this._email = value
    }

    get email(): string {
        return this._email
    }
}

// ! [3] dipanggil tanpa harus menginisiasikan Class
// let azola = new Admin(24584, "Azola", 22) //! -> tidak perlu
console.log(Admin.gender)
console.log(Admin.sayHai())

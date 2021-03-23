//? SETTER digunakan untuk menset suatu properti , untk validasi suatu input disuatu class
//? GETTER digunakan unutk mengambil nilai dari property di suatu class

// TODO Setter dan Getter
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

// TODO Inheritance menggunakan Super() contraktor
class Admin extends User {
    write: boolean = true
    read: boolean = true
    private _email: string = "" // ! [1] buat property dengan type private

    getRoles(): { write: boolean; read: boolean } {
        return {
            write: this.write,
            read: this.read,
        }
    }

    // ! [2] SET suatu method
    set email(value: string) {
        this._email = value
    }

    // ! [3] GET suatu method
    get email(): string {
        return this._email
    }
}
let admin = new Admin("Azola", 22)
console.log(admin)
// ! tidak dapat diakses karena property _email Private
// admin._email
admin.email = "azola@gmail.com" //! [4] SET input email disini
console.log(admin)

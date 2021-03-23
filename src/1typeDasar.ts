// TODO String
let nama: string = "Azola"
nama = "Dety"

// TODO Number
let no: Number
no = 1
no = 99

// Boolean
let isMarried: boolean
isMarried = false
isMarried = true

// TODO Any
let anythink: any = "Azola"
anythink = 1
anythink = false
anythink = ["Azola", 1, false]
anythink = {
    msg: "Hallo",
    data: "World",
    code: 200,
}

// TODO type UNION
type Phone = number | string
let phone: Phone = 6212342112
phone = "087676545"
console.log(phone)

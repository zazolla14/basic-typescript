// TODO typedata pada func
function getName(): string {
    return "My name Azola"
}
function getAges(): number {
    return 22
}
console.log(getName())

// * func Void digunakan untuk membuat func tanpa RETURN
function prints(): void {
    console.log(getAges())
}
prints()

// TODO typedata pada PARAMETER
function multyple(val1: number, val2: number): number {
    return val1 * val2
}
console.log(multyple(20, 5))

// TODO default PARAMETER
function fullName(fisrtName: string, lastname: string = "Zubizarreta"): string {
    return `Hallo ${fisrtName} ${lastname}`
}
console.log(fullName("Azola"))
console.log(fullName("Dety", "Mei"))

// TODO optional Parameter -> bisa diisi atau tidak. Jika tidak diisi maka value nya akan undifine
function getProducts(name: string, code?: string): string {
    return `Name products ${name}, code: ${code}`
}
console.log(getProducts("shampo", "SH01"))
console.log(getProducts("shampo"))

// * typedata number tidak disarankan menggunakan optional Parameter
// function min(val1: number, val2?: number): number {
//     return val1 - val2
// }
// console.log(min(5, 10))

// TODO typedata sebagai type
type Add = (val1: number, val2: number) => number
const tambah: Add = (val1, val2) => {
    return val1 + val2
}
console.log(tambah(1, 1))

type Biodata = (name: string, ages: number) => any
const azola: Biodata = (name, ages) => {
    return `${name} umur ${ages}`
}
console.log(azola("Azola", 22))

type Biodata2 = (name: string, age: number) => void
const dety: Biodata = (name: string, age: number) => {
    console.log(`Hai my ${name} and ${age} olds`)
}
dety("Dety", 21)

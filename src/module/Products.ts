import Lenovo from "./Lanevo"
import MacBook from "./Macbook"

let lenovo = new Lenovo("Legion", true, false)
console.log(lenovo)
lenovo.turnOn()
lenovo.turnOff()
console.log("\n")

let macbook = new MacBook(2020, false, true)
console.log(macbook)
macbook.turnOn()
macbook.turnOff()

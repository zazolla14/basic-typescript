// ? INTERFACE merupakan Groupin dari Property dan Method yang dapat di-IMPLEMETASI-kan pada clas

interface Notebook {
    name: string
    turnOn(): void
    turnOff(): void
}

class Lenovo implements Notebook {
    name: string
    isGaming: boolean
    constructor(name: string, isGaming: boolean) {
        this.name = name
        this.isGaming = isGaming
    }
    turnOn(): void {
        console.log("Turn On")
    }
    turnOff(): void {
        console.log("Shutdown")
    }
}
let lenovo = new Lenovo("Legion", true)
console.log(lenovo)
console.log(`Name product ${lenovo.name}, Gaming: ${lenovo.isGaming}`)
lenovo.turnOn()
lenovo.turnOff()

interface Motor {
    name: string
    cc: number
    automatic: boolean
    start(): void
    stop(): void
}

class CBR250RR implements Motor {
    name: string
    cc: number
    automatic: boolean
    constructor(name: string, cc: number, automatic: boolean) {
        this.name = name
        this.cc = cc
        this.automatic = automatic
    }

    start(): void {
        console.log("Engine Start...")
    }

    stop(): void {
        console.log("Engine stop...")
    }
}

let cbr250rr = new CBR250RR("CBR250RR", 250, false)
console.log(cbr250rr)
console.log(`${cbr250rr.name}, ${cbr250rr.cc}cc,${cbr250rr.automatic}`)
cbr250rr.start()
cbr250rr.stop()

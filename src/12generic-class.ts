class List<T> {
    private data: T[]
    constructor(...datas: T[]) {
        this.data = datas
    }

    setDatas(...value: T[]): void {
        this.data.push(...value)
    }

    setData(value: T): void {
        this.data.push(value)
    }

    getDatas(): T[] {
        return this.data
    }
}

// ! jika hanya ingin mengini class dengan typedata Number
let data = new List<number>(1, 2, 3)
console.log(data)
data.setDatas(4, 5, 6)
data.setData(7)
console.log(data.getDatas())

// ! jika ingin mengini data dengan random
let random = new List<number | string | boolean>(1, "Azola", true, "Dety", 3)
console.log(random)
random.setDatas(true, 3, "Zubi")
console.log(random.getDatas())
random.setData("Mei")
console.log(random.getDatas())

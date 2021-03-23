import ILaptop from "./ILaptop"
import * as Power from "./Power"

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string
  type: T
  isGaming: boolean
  isSlim: boolean

  constructor(name: string, type: T, gaming: boolean, slim: boolean) {
    this.name = name
    this.type = type
    this.isGaming = gaming
    this.isSlim = slim
  }

  turnOn(): void {
    return Power.turnOn()
  }

  turnOff(): void {
    return Power.turnOff()
  }
}

export default BaseLaptop

import BaseLaptop from "./BaseLaptop"

class MacBook<T> extends BaseLaptop<T> {
  constructor(type: T, gaming: boolean, slim: boolean) {
    super("Macbook", type, gaming, slim)
  }
}
export default MacBook

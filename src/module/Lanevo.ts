import BaseLaptop from "./BaseLaptop"

class Lenovo<T> extends BaseLaptop<T> {
    constructor(type: T, gaming: boolean, slim: boolean) {
        super("Lenovo", type, gaming, slim)
    }
}
export default Lenovo

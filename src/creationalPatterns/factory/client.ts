import Chair from "./chair"
import ChairFactory from "./chairFactory"

const CHAIR: Chair = ChairFactory.getChair('SmallChair')
console.log(CHAIR.getDimension())
console.log(CHAIR.getArea())
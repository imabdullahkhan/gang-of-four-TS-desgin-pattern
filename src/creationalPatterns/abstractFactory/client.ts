import FurnitureFactory from './furniture-factory'

let FURNITURE = FurnitureFactory.getFurniture('SmallChair')
console.log(FURNITURE.name)
console.log(FURNITURE.getDimension())

FURNITURE = FurnitureFactory.getFurniture('BigTable')
console.log(FURNITURE.name)
console.log(FURNITURE.getDimension())

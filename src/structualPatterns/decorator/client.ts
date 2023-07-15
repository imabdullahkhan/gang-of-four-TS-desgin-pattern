import SugarDecorator from "./SugarDecorator";
import SimpleCoffee from "./simpleCoffee";



let coffee = new SimpleCoffee();
console.log(coffee.getCost());
console.log(coffee.getDescription());

coffee = new SugarDecorator(coffee);
console.log(coffee.getCost());
console.log(coffee.getDescription());


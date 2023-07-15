import { ICoffee } from "./ICoffee";
import SimpleCoffee from "./simpleCoffee";

export default class SugarDecorator implements ICoffee {
  private coffee: SimpleCoffee;
  constructor(coffee: SimpleCoffee) {
    this.coffee = coffee;
  }
  getDescription(): string {
    return `${this.coffee.getDescription()}, Sugar`;
  }
  getCost(): number {
    return this.coffee.getCost() + 2;
  }
  getSugarDetails() {
    return "This is Sugar Details"
  }

} 
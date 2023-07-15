import { ICoffee } from "./ICoffee";

export default class SimpleCofee implements ICoffee {
  getDescription(): string {
    return "Simple coffee";
  }
  getCost(): number {
    return 5;
  }

} 
import { ITree } from "./ITree";

export default class TreeFlyWeight implements ITree {
  type: string;
  image: string;
  constructor(type: string, image: string) {
    this.type = type;
    this.image = image;
  }
  render(x: number, y: number): void {
    console.log(`Rendering a ${this.type} tree at (${x}, ${y}) with image: ${this.image}`);
  }

}
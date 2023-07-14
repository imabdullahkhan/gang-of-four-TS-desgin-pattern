import { Dimension } from "./dimension";

export interface IChair {
  height: number;
  width: number;
  name: string;
  getDimension(): Dimension
  getArea(): number
}

export default abstract class Chair implements IChair {
  height: number = 0;
  width: number = 0;
  name: string = ""
  getDimension(): Dimension {
    return {
      height: this.height,
      width: this.width
    }
  }
  abstract getArea(): number;

}
import { Dimension } from "./dimension";

interface IChair {
  height: number;
  width: number;
  getDimension(): Dimension
  getArea(): number
}

export default abstract class Chair implements IChair {
  height: number = 0;
  width: number = 0;
  getDimension(): Dimension {
    return {
      height: this.height,
      width: this.width
    }
  }
  abstract getArea(): number;

}
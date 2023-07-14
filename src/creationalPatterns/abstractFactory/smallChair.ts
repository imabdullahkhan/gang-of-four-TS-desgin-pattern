import Chair from "./chair";

export default class SmallChair extends Chair {

  constructor() {
    super();
    this.height = 10;
    this.width = 20;
    this.name = "SMALL CHAIR";
  }
  getArea(): number {
    return this.height * this.width;
  }

}
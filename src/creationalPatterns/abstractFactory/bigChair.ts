import Chair from "./chair";

export default class BigChair extends Chair {

  constructor() {
    super();
    this.height = 20;
    this.width = 50;
    this.name = "BIG CHAIR";
  }
  getArea(): number {
    return this.height * this.width;
  }

}
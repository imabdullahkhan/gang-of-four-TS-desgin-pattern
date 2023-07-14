import Chair from "./chair";

export default class BigChair extends Chair {

  constructor() {
    super();
    this.height = 20;
    this.width = 50;
  }
  getArea(): number {
    return this.height * this.width;
  }

}
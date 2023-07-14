import Table from "./table";

export default class SmallTable extends Table {

  constructor() {
    super();
    this.height = 10;
    this.width = 20;
    this.name = "SMALL TABLE";
  }
  getArea(): number {
    return this.height * this.width;
  }

}
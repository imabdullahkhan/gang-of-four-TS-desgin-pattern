import Table from "./table";

export default class BigTable extends Table {

  constructor() {
    super();
    this.height = 20;
    this.width = 50;
    this.name = "BIG TABLE"
  }
  getArea(): number {
    return this.height * this.width;
  }

}
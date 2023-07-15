import TreeFactory from "./TreeFactory";
import TreeFlyWeight from "./TreeFlyWeight";

export default class TreeClient {
  private treeFlyWeight: TreeFlyWeight;
  private x: number;
  private y: number;
  constructor(treeType: string, treeImage: string, x: number, y: number, factory: TreeFactory) {
    this.treeFlyWeight = factory.getFlyweight(treeType, treeImage);
    this.x = x;
    this.y = y;
  }
  render(): void {
    this.treeFlyWeight.render(this.x, this.y);
  }

} 
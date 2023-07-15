import TreeFlyWeight from "./TreeFlyWeight";

export default class TreeFactory {
  private flyweights: { [key: string]: TreeFlyWeight } = {};

  getFlyweight(type: string, image: string): TreeFlyWeight {
    const key = `${type}-${image}`;
    if (!this.flyweights[key]) {
      this.flyweights[key] = new TreeFlyWeight(type, image);
    }
    return this.flyweights[key];
  }

  getFlyweightCount(): number {
    return Object.keys(this.flyweights).length;
  }
}
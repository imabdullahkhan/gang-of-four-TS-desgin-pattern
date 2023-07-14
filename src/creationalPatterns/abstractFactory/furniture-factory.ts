import { IChair } from "./chair";
import ChairFactory from "./chairFactory";
import { ITable } from "./table";
import TableFactory from "./tableFactory";

interface IFurniture extends IChair, ITable { }
export default class FurnitureFactory {
  static getFurniture(furniture: string): IFurniture {
    if (['BigTable', 'SmallTable'].indexOf(furniture) > -1) {
      return TableFactory.getTable(furniture);
    } else { return ChairFactory.getChair(furniture) };
  }
}
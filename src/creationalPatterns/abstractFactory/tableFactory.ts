import BigTable from "./bigTable"
import SmallTable from "./smallTable"
import { ITable } from './table'

export default class TableFactory {
  static getTable(table: string): ITable {
    if (table == 'BigTable') {
      return new BigTable()
    } else {
      return new SmallTable()
    }
  }
}
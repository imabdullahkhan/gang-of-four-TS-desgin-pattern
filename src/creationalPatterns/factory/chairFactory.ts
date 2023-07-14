
import BigChair from './bigChair'
import IChair from './chair'
import SmallChair from './smallChair'

export default class ChairFactory {
  static getChair(chair: string): IChair {
    if (chair == 'BigChair') {
      return new BigChair()
    } else {
      return new SmallChair()
    }
  }
}
import IAtmHandler from "./IAtm";

export default abstract class BaseATMHandler implements IAtmHandler {
  protected nextHandler: IAtmHandler | null = null;

  setNext(handler: IAtmHandler): void {
    this.nextHandler = handler;
  }
  abstract dispatch(amount: number): void;

}
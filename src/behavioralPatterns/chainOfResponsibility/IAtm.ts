export default interface IAtmHandler {
  setNext(handler: IAtmHandler): void;
  dispatch(amount: number): void;
}
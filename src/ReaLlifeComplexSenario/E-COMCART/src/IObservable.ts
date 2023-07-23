export interface ISubject {
  addSubscriber(obs: IObserver): void;
  removeSubscriber(obs: IObserver): void;
  notifyObs(productId: number, isAdded: boolean): void;
}
export interface IObserver {
  update(productId: number, isAdded: boolean): void;
}
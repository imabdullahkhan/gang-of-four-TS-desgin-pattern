import { IObserver } from "./IObservable";

export class UICart implements IObserver {
  update(productId: number, isAdded: boolean): void {
    if(isAdded){
      console.log(`Product Id ${productId} is added to cart`);
    }else{
      console.log(`Product Id ${productId} is removed to cart`);
    }
  }
}
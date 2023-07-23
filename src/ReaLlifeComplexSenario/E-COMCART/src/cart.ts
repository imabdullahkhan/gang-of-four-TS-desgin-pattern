import { IObserver, ISubject } from "./IObservable";


abstract class CartProduct {
  constructor(public productId: number, public name: string) { }
  abstract getPrice(): number;
}
export class CartItem extends CartProduct {
  getPrice(): number {
    return this.price;
  }
  constructor(public productId: number, public name: string, public price: number) {
    super(productId, name)
  }
}
export class CartBundleItems extends CartProduct {
  getPrice(): number {
    return this.cartItems.reduce((total, cartItem) => total + cartItem.getPrice(), 0);

  }
  constructor(public productId: number, public name: string, public cartItems: CartItem[]) {
    super(productId, name)
  }
}

export class GiftWrappedProduct extends CartProduct {
  protected product: CartItem;
  constructor(product: CartItem) {
    super(product.productId, product.name);
    this.product = product;
  }
  getPrice(): number {
    return this.product.getPrice() + 5;
  }
}

export class Cart implements ISubject {
  private items: CartProduct[];
  private static instance: Cart;
  observers: IObserver[] = []
  private constructor() {
    this.items = [];
  }
  addSubscriber(obs: IObserver): void {
    this.observers.push(obs);
  }
  removeSubscriber(obs: IObserver): void {
    const index = this.observers.indexOf(obs);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObs(productId: number, isAdded: boolean): void {
    for (const observer of this.observers) {
      observer.update(productId, isAdded);
    }
  }
  public static getInstance(): Cart {
    if (!Cart.instance) {
      this.instance = new Cart();
    }
    return this.instance;
  }
  public addItem(item: CartProduct) {
    this.items.push(item);
    this.notifyObs(item.productId, true);
  }
  public removeItem(productId: number): void {
    this.items = this.items.filter((i) => i.productId !== productId);
    this.notifyObs(productId, false);
  }

  public calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
  }
  public printAllProductIds() {
    for (let i = 0; i < this.items.length; i++) {
      
      console.log(this.items[i].productId);
    }
  }

}

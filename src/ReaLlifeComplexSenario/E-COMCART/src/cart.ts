export class CartItem {
  constructor(public productId: number, public name: string, public price: number) { }
}

export class Cart {
  private items: CartItem[];
  private static instance: Cart;
  private constructor() {
    this.items = [];
  }
  public static getInstance(): Cart {
    if (!Cart.instance) {
      this.instance = new Cart();
    }
    return this.instance;
  }
  public addItem(item: CartItem) {
    this.items.push(item);
  }
  public removeItem(productId: number): void {
    this.items = this.items.filter((i) => i.productId !== productId);
  }

  public calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

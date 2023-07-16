// Visitor interface
interface ShoppingCartVisitor {
  visitBook(book: Book): number;
  visitFruit(fruit: Fruit): number;
}

// Concrete Visitor
class ShoppingCart implements ShoppingCartVisitor {
  visitBook(book: Book): number {
    return book.price;
  }

  visitFruit(fruit: Fruit): number {
    return fruit.weight * fruit.pricePerKg;
  }
}
// Element 1: Book
class Book {
  public title: string;
  public price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  accept(visitor: ShoppingCartVisitor) {
    return visitor.visitBook(this);
  }
}

// Element 2: Fruit
class Fruit {
  public name: string;
  public pricePerKg: number;
  public weight: number;

  constructor(name: string, pricePerKg: number, weight: number) {
    this.name = name;
    this.pricePerKg = pricePerKg;
    this.weight = weight;
  }

  getName() {
    return this.name;
  }

  getPricePerKg() {
    return this.pricePerKg;
  }

  getWeight() {
    return this.weight;
  }

  accept(visitor: ShoppingCartVisitor) {
    return visitor.visitFruit(this);
  }
}

const shoppingCart = new ShoppingCart();

const book = new Book('Design Patterns', 30);
const apple = new Fruit('Apple', 2, 0.5);
const banana = new Fruit('Banana', 1.5, 0.3);

const items = [book, apple, banana];

let totalPrice = 0;

for (const item of items) {
  totalPrice += item.accept(shoppingCart);
}

console.log('Total Price:', totalPrice);


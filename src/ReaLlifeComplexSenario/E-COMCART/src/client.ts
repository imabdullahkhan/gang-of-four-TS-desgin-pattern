import { Cart, CartItem } from "./cart";

console.log("Let Create Cart");
let cart = Cart.getInstance();
cart.addItem(new CartItem(1, "toy", 1));
console.log(cart.calculateTotal());
cart.removeItem(1);
console.log(cart.calculateTotal());

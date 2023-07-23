import { UICart } from "./UIcart";
import { Cart, CartBundleItems, CartItem, GiftWrappedProduct } from "./cart";
import { FiftyPercentageDiscountStrategy } from "./discount";

console.log("Let E-Com Cart");
let cart = Cart.getInstance();
let uiCart = new UICart();
cart.addSubscriber(uiCart);
let toy = new CartItem(1, "toy", 1);
let soap = new CartItem(2, "soap", 1);
let bundle = new CartBundleItems(3, "BUNDLE", [toy, soap]);

cart.addItem(new GiftWrappedProduct(toy));
cart.addItem(bundle);
console.log(cart.calculateTotal());
cart.removeItem(1);
let discount = new FiftyPercentageDiscountStrategy();
console.log(discount.applyDiscount(cart.calculateTotal()));
console.log(cart.calculateTotal());
cart.printAllProductIds()

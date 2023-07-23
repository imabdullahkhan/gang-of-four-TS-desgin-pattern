import { OrderCheckout } from "./OrderCheckout";

const test1 = new OrderCheckout(10, 10, 10, 30);
console.log("Order 1 Processing Result:", test1.processOrder());
console.log("Remaining Payment Sources:", test1.getRemainingPaymentSources());

const test2 = new OrderCheckout(30, 10, 10, 30);
console.log("Order 2 Processing Result:", test2.processOrder());
console.log("Remaining Payment Sources:", test2.getRemainingPaymentSources());

const test3 = new OrderCheckout(20, 10, 10, 30);
console.log("Order 3 Processing Result:", test3.processOrder());
console.log("Remaining Payment Sources:", test3.getRemainingPaymentSources());

const test4 = new OrderCheckout(0, 10, 10, 30);
console.log("Order 4 Processing Result:", test4.processOrder());
console.log("Remaining Payment Sources:", test4.getRemainingPaymentSources());

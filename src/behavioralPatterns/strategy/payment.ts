// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;
  private expiryDate: string;
  private cvv: string;

  constructor(cardNumber: string, expiryDate: string, cvv: string) {
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }

  pay(amount: number) {
    console.log(`Paid $${amount} using Credit Card`);
    // Add logic to process the payment using credit card information
  }
}

class PayPalPayment implements PaymentStrategy {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  pay(amount: number) {
    console.log(`Paid $${amount} using PayPal`);
    // Add logic to process the payment using PayPal
  }
}

class BankTransferPayment implements PaymentStrategy {
  private accountNumber: string;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  pay(amount: number) {
    console.log(`Paid $${amount} using Bank Transfer`);
    // Add logic to process the payment using bank transfer
  }
}
// Context
class PaymentContext {
  private paymentStrategy!: PaymentStrategy;

  setPaymentStrategy(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  makePayment(amount: number) {
    this.paymentStrategy.pay(amount);
  }
}

  const paymentContext = new PaymentContext();

  const creditCardPayment = new CreditCardPayment('1234 5678 9012 3456', '12/24', '123');
  const payPalPayment = new PayPalPayment('example@example.com');
  const bankTransferPayment = new BankTransferPayment('9876543210');

  paymentContext.setPaymentStrategy(creditCardPayment);
  paymentContext.makePayment(100);

  paymentContext.setPaymentStrategy(payPalPayment);
  paymentContext.makePayment(50);

  paymentContext.setPaymentStrategy(bankTransferPayment);
  paymentContext.makePayment(200);


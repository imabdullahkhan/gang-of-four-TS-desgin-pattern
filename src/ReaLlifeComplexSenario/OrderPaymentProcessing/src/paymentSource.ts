import { PaymentSource } from "./paymentSourceInterface";

export class Cash implements PaymentSource {
  private availableAmount: number;

  constructor(amount: number) {
    this.availableAmount = amount;
  }

  deduct(amount: number): void {
    this.availableAmount -= amount;
  }

  getAvailableAmount(): number {
    return this.availableAmount;
  }
}

export class WalletCoins implements PaymentSource {
  private availableAmount: number;

  constructor(amount: number) {
    this.availableAmount = amount;
  }

  deduct(amount: number): void {
    this.availableAmount -= amount;
  }

  getAvailableAmount(): number {
    return this.availableAmount;
  }
}

export class CreditLimit implements PaymentSource {
  private availableAmount: number;

  constructor(creditLimit: number) {
    this.availableAmount = creditLimit;
  }

  deduct(amount: number): void {
    this.availableAmount -= amount;
  }

  getAvailableAmount(): number {
    return this.availableAmount;
  }
}

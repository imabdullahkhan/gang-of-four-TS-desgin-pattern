import { Cash, WalletCoins, CreditLimit } from "./paymentSource";

export class OrderCheckout {
  private cash: Cash;
  private walletCoins: WalletCoins;
  private creditLimit: CreditLimit;
  private totalOrderValue: number;

  constructor(cash: number, walletCoins: number, creditLimit: number, totalOrderValue: number) {
    this.cash = new Cash(cash);
    this.walletCoins = new WalletCoins(walletCoins);
    this.creditLimit = new CreditLimit(creditLimit);
    this.totalOrderValue = totalOrderValue;
  }

  private processOrderUsingCash(): void {
    if (this.cash.getAvailableAmount() >= this.totalOrderValue) {
      this.cash.deduct(this.totalOrderValue);
      this.totalOrderValue = 0;
    } else {
      this.totalOrderValue -= this.cash.getAvailableAmount();
      this.cash.deduct(this.cash.getAvailableAmount());
    }
  }

  private processOrderUsingWalletCoins(): void {
    if (this.walletCoins.getAvailableAmount() >= this.totalOrderValue) {
      this.walletCoins.deduct(this.totalOrderValue);
      this.totalOrderValue = 0;
    } else {
      this.totalOrderValue -= this.walletCoins.getAvailableAmount();
      this.walletCoins.deduct(this.walletCoins.getAvailableAmount());
    }
  }

  private processOrderUsingCreditLimit(): void {
    if (this.creditLimit.getAvailableAmount() >= this.totalOrderValue) {
      this.creditLimit.deduct(this.totalOrderValue);
      this.totalOrderValue = 0;
    } else {
      this.totalOrderValue -= this.creditLimit.getAvailableAmount();
      this.creditLimit.deduct(this.creditLimit.getAvailableAmount());
    }
  }

  public processOrder(): boolean {
    this.processOrderUsingCash();
    this.processOrderUsingWalletCoins();
    this.processOrderUsingCreditLimit();

    return this.totalOrderValue === 0;
  }

  public getRemainingPaymentSources(): { cash: number; walletCoins: number; creditLimit: number } {
    return {
      cash: this.cash.getAvailableAmount(),
      walletCoins: this.walletCoins.getAvailableAmount(),
      creditLimit: this.creditLimit.getAvailableAmount(),
    };
  }
}

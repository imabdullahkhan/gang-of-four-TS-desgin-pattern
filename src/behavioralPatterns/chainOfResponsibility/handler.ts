import BaseATMHandler from "./baseAtm";

export class FiftyDollarHandler extends BaseATMHandler {
  dispatch(amount: number): void {
    const denominations = 50;
    const count = Math.floor(amount / denominations);
    console.log(`Dispensing ${count} $50 banknote${count > 1 ? 's' : ''}`);
    const remainingAmount = amount % denominations;
    if (remainingAmount > 0 && this.nextHandler) {
      this.nextHandler.dispatch(remainingAmount);
    }
  }

}

export class TenDollarHandler extends BaseATMHandler {
  dispatch(amount: number) {
    const denominations = 10;
    const count = Math.floor(amount / denominations);
    console.log(`Dispensing ${count} $10 banknote${count > 1 ? 's' : ''}`);
    const remainingAmount = amount % denominations;
    if (remainingAmount > 0 && this.nextHandler) {
      this.nextHandler.dispatch(remainingAmount);
    }
  }

}
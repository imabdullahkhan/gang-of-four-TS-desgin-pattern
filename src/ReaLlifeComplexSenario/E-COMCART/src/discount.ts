export interface DiscountStrategy {
  applyDiscount(total: number): number;
}

export class FiftyPercentageDiscountStrategy implements DiscountStrategy {


  applyDiscount(total: number): number {
    return total - (total * (50 / 100));
  }
}

export class TenPercentageDiscountStrategy implements DiscountStrategy {

  applyDiscount(total: number): number {
    return total - (total * (10 / 100));
  }
}

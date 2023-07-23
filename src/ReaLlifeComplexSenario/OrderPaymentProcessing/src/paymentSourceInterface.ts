export interface PaymentSource {
  deduct(amount: number): void;
  getAvailableAmount(): number;
}

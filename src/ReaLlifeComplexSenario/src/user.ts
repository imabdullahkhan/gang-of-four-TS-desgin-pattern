export interface IUser {
  getWallet(): number;
  setWallet(wallet: number): void;
  getCredit(): number;
  setCredit(credit: number): void;
}

export class User implements IUser {

  private wallet: number;
  private credit: number;



  getWallet(): number {
    return this.wallet;
  }
  setWallet(wallet: number): void {
    this.wallet = wallet;
  }
  getCredit(): number {
    return this.credit;
  }
  setCredit(credit: number): void {
    this.credit = credit;
  }

}
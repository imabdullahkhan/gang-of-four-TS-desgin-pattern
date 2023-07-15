export interface ITree {
  type: string;
  image: string;
  render(x: number, y: number): void;
}

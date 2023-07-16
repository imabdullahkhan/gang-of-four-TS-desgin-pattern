// Abstract class with Template Method
abstract class Beverage {
  prepareBeverage(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  private boilWater(): void {
    console.log('Boiling water...');
  }

  abstract brew(): void;

  private pourInCup(): void {
    console.log('Pouring into cup...');
  }

  abstract addCondiments(): void;
}

// Concrete Class 1: Coffee
class Coffee extends Beverage {
  brew(): void {
    console.log('Brewing coffee...');
  }

  addCondiments(): void {
    console.log('Adding sugar and milk...');
  }
}

// Concrete Class 2: Tea
class Tea extends Beverage {
  brew(): void {
    console.log('Steeping tea...');
  }

  addCondiments(): void {
    console.log('Adding lemon...');
  }
}
console.log('Preparing Coffee...');
  const coffee = new Coffee();
  coffee.prepareBeverage();

  console.log('\nPreparing Tea...');
  const tea = new Tea();
  tea.prepareBeverage();
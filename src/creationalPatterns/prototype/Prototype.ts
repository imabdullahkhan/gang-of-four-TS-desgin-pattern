interface Prototype {
  clone(): Prototype;
  getProperty(): string;
}

class ConcretePrototype implements Prototype {
  private property: string;

  constructor(property: string) {

    console.log("HEY I HAVE BEEN CALLED ONLY ONCE YOU CAN DO HERE COST EFFECTIVE TASK :)");
    this.property = property;
  }

  public clone(): Prototype {
    const clone = Object.create(ConcretePrototype.prototype);
    clone.property = this.property;
    return clone;
  }

  public getProperty(): string {
    return this.property;
  }
}

// Usage
const prototype = new ConcretePrototype("Original");
const clone1 = prototype.clone();
const clone2 = prototype.clone();

console.log(clone1.getProperty()); // Output: Original
console.log(clone2.getProperty()); // Output: Original
console.log(clone1 === clone2); // Output: false

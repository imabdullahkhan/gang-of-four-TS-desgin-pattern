interface Image {
  display(): void;
}

// Real Subject
class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  display() {
    console.log(`Displaying image ${this.filename}`);
  }

  private loadFromDisk() {
    console.log(`Loading image ${this.filename} from disk`);
  }
}

// Proxy
class ImageProxy implements Image {
  private realImage: RealImage | null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.realImage = null;
  }

  display() {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Usage example
const imageProxy1 = new ImageProxy("image1.jpg");

// Image will be loaded from disk when calling display() for the first time
imageProxy1.display();

// Image won't be loaded from disk again, as it's cached
imageProxy1.display();

interface IObserver {
  update(temp: number, windSpeed: number): void;
}
interface ISubject {
  addSubscriber(obs: IObserver): void;
  removeSubscriber(obs: IObserver): void;
  notifyObs(): void;
}

class Weather implements ISubject {
  observers: IObserver[] = []
  temp: number = 0;
  windSpeed: number = 0;

  addSubscriber(obs: IObserver): void {
    this.observers.push(obs);
  }
  removeSubscriber(obs: IObserver): void {
    const index = this.observers.indexOf(obs);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObs(): void {
    for (const observer of this.observers) {
      observer.update(this.temp, this.windSpeed);
    }
  }
  setWeatherData(temperature: number, windSpeed: number) {
    this.temp = temperature;
    this.windSpeed = windSpeed;
    this.notifyObs();
  }
}

class Device implements IObserver {
  update(temp: number, windSpeed: number): void {
    console.log(` TEMP is  ${temp} , and windSpeed is ${windSpeed}`);
  }
}

let weather = new Weather();
let displayDevice = new Device();
weather.addSubscriber(displayDevice);
weather.setWeatherData(10, 20);
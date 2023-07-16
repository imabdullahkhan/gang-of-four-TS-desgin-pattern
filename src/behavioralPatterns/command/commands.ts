import ICommand from "./ICommand";
import Fan from "./fan";
import Light from "./light";


export class LightTurnOnCommand implements ICommand {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }


  execute(): void {
    this.light.turnOnLight();
  }
  undo(): void {
    this.light.turnOffLight();
  }

}

export class LightTurnOffCommand implements ICommand {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOffLight();
  }
  undo(): void {
    this.light.turnOnLight();
  }

}

export class FanTurnOffCommand implements ICommand {
  fan: Fan;
  constructor(fan: Fan) {
    this.fan = fan;
  }

  execute(): void {
    this.fan.turnOffFan();
  }
  undo(): void {
    this.fan.turnOnFan();
  }

}


export class FanTurnOnCommand implements ICommand {
  fan: Fan;
  constructor(fan: Fan) {
    this.fan = fan;
  }

  execute(): void {
    this.fan.turnOnFan();
  }
  undo(): void {
    this.fan.turnOffFan();
  }

}
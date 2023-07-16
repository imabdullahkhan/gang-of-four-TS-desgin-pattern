import { FanTurnOffCommand, FanTurnOnCommand, LightTurnOffCommand, LightTurnOnCommand } from "./commands";
import RemoteController from "./remoteController";
import Fan from "./fan";
import Light from "./light";

const livingRoomLight = new Light();
const livingRoomFan = new Fan();

const livingRoomLightOn = new LightTurnOnCommand(livingRoomLight);
const livingRoomLightOff = new LightTurnOffCommand(livingRoomLight);
const livingRoomFanOn = new FanTurnOnCommand(livingRoomFan);
const livingRoomFanOff = new FanTurnOffCommand(livingRoomFan);

const remoteControl = new RemoteController();
remoteControl.setCommand(livingRoomLightOn, livingRoomLightOff);
remoteControl.setCommand(livingRoomFanOn, livingRoomFanOff);

remoteControl.pressOnButton(0); // Turns on the living room light
remoteControl.pressOffButton(0); // Turns off the living room light

remoteControl.pressOnButton(1); // Turns on the living room fan
remoteControl.pressOffButton(1); // Turns off the living room fan

remoteControl.pressUndoButton(); // Undoes the last command (turns off the fan)

remoteControl.pressUndoButton(); 
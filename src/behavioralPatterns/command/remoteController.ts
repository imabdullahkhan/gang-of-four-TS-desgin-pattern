import ICommand from "./ICommand";

export default class RemoteController {

  private onCommands: ICommand[] = [];
  private offCommands: ICommand[] = [];
  private undoCommand!: ICommand;

  setCommand(onCommand: ICommand, offCommand: ICommand) {
    this.onCommands.push(onCommand);
    this.offCommands.push(offCommand);
  }

  pressOnButton(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  pressOffButton(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  pressUndoButton() {
    this.undoCommand.undo();
  }
}
// Memento
class GameMemento {
  private level: number;

  constructor(level: number) {
    this.level = level;
  }

  getLevel() {
    return this.level;
  }
}
// Originator
class Game {
  private level: number;

  constructor() {
    this.level = 1;
  }

  play() {
    console.log(`Playing Level ${this.level}`);
    this.level++;
  }

  save(): GameMemento {
    return new GameMemento(this.level);
  }

  restore(memento: GameMemento) {
    this.level = memento.getLevel();
  }
  getLevel() {
    return this.level;
  }
}
// Caretaker
class GameHistory {
  private mementos: GameMemento[] = [];

  addMemento(memento: GameMemento) {
    this.mementos.push(memento);
  }

  getMemento(index: number) {
    return this.mementos[index];
  }
}


  const game = new Game();
  const history1 = new GameHistory();

  game.play(); // Playing Level 1
  history1.addMemento(game.save());

  game.play(); // Playing Level 2
  history1.addMemento(game.save());

  game.play(); // Playing Level 3
  history1.addMemento(game.save());

  console.log('Current Level:', game.getLevel());

  game.restore(history1.getMemento(1));
  console.log('Restored Level:', game.getLevel());


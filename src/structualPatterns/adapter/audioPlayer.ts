class OldAudioPlayer {
  playOldAudioFormat(file: string) {
    console.log("Playing old audio file:", file);
  }
}

class NewAudioPlayer {
  playNewAudioFormat(file: string) {
    console.log("Playing new audio file:", file);
  }
}

interface AudioPlayer {
  play(file: string): void;
}

class OldAudioPlayerAdapter implements AudioPlayer {
  private newPlayer: NewAudioPlayer;

  constructor(newPlayer: NewAudioPlayer) {
    this.newPlayer = newPlayer;
  }

  play(file: string) {
    this.newPlayer.playNewAudioFormat(file);
  }
}
const oldPlayer = new OldAudioPlayer();
const newPlayer = new NewAudioPlayer()
const oldPlayerAdapter = new OldAudioPlayerAdapter(newPlayer);
oldPlayerAdapter.play("This old song is playing with new Implementation");
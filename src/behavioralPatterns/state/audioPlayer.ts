// State interface
interface AudioPlayerState {
  play(): void;
  pause(): void;
  stop(): void;
}
class AudioPlayer {
  private playingState: AudioPlayerState;
  private pausedState: AudioPlayerState;
  private stoppedState: AudioPlayerState;
  private currentState: AudioPlayerState;

  constructor() {
    this.playingState = new PlayingState(this);
    this.pausedState = new PausedState(this);
    this.stoppedState = new StoppedState(this);
    this.currentState = this.stoppedState;
  }

  setState(state: AudioPlayerState) {
    this.currentState = state;
  }

  getPlayingState(): AudioPlayerState {
    return this.playingState;
  }

  getPausedState(): AudioPlayerState {
    return this.pausedState;
  }

  getStoppedState(): AudioPlayerState {
    return this.stoppedState;
  }

  play() {
    this.currentState.play();
  }

  pause() {
    this.currentState.pause();
  }

  stop() {
    this.currentState.stop();
  }
}
// Concrete State: Playing State
class PlayingState implements AudioPlayerState {
  audioPlayer: AudioPlayer;

  constructor(audioPlayer: AudioPlayer) {
    this.audioPlayer = audioPlayer;
  }

  play() {
    console.log("Already playing...");
  }

  pause() {
    console.log("Pausing the audio...");
    this.audioPlayer.setState(this.audioPlayer.getPausedState());
  }

  stop() {
    console.log("Stopping the audio...");
    this.audioPlayer.setState(this.audioPlayer.getStoppedState());
  }
}

// Concrete State: Paused State
class PausedState implements AudioPlayerState {
  audioPlayer: AudioPlayer;

  constructor(audioPlayer: AudioPlayer) {
    this.audioPlayer = audioPlayer;
  }

  play() {
    console.log("Resuming the audio...");
    this.audioPlayer.setState(this.audioPlayer.getPlayingState());
  }

  pause() {
    console.log("Already paused...");
  }

  stop() {
    console.log("Stopping the audio...");
    this.audioPlayer.setState(this.audioPlayer.getStoppedState());
  }
}

// Concrete State: Stopped State
class StoppedState implements AudioPlayerState {
  audioPlayer: AudioPlayer;

  constructor(audioPlayer: AudioPlayer) {
    this.audioPlayer = audioPlayer;
  }

  play() {
    console.log("Playing the audio...");
    this.audioPlayer.setState(this.audioPlayer.getPlayingState());
  }

  pause() {
    console.log("Audio is stopped. Cannot pause.");
  }

  stop() {
    console.log("Already stopped...");
  }
}
const audioPlayer = new AudioPlayer();

audioPlayer.play(); // Playing the audio...
audioPlayer.pause(); // Pausing the audio...
audioPlayer.play(); // Resuming the audio...
audioPlayer.stop(); // Stopping the audio...
audioPlayer.pause(); // Audio is stopped. Cannot pause.
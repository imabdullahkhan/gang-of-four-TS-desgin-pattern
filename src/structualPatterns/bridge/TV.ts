interface TV {
  on(): void;
  off(): void;
  setChannel(channel: number): void;
}
class SonyTV implements TV {
  on() {
    console.log("Sony TV is ON");
  }

  off() {
    console.log("Sony TV is OFF");
  }

  setChannel(channel: number) {
    console.log("Sony TV channel set to", channel);
  }
}

class LGTV implements TV {
  on() {
    console.log("LG TV is ON");
  }

  off() {
    console.log("LG TV is OFF");
  }

  setChannel(channel: number) {
    console.log("LG TV channel set to", channel);
  }
}
abstract class RemoteControl {
  protected tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  abstract on(): void;
  abstract off(): void;
  abstract setChannel(channel: number): void;
}
class BasicRemote extends RemoteControl {
  on() {
    console.log("Basic Remote: Power ON");
    this.tv.on();
  }

  off() {
    console.log("Basic Remote: Power OFF");
    this.tv.off();
  }

  setChannel(channel: number) {
    console.log("Basic Remote: Set channel to", channel);
    this.tv.setChannel(channel);
  }
}

class AdvancedRemote extends RemoteControl {
  on() {
    console.log("Advanced Remote: Power ON");
    this.tv.on();
  }

  off() {
    console.log("Advanced Remote: Power OFF");
    this.tv.off();
  }

  setChannel(channel: number) {
    console.log("Advanced Remote: Set channel to", channel);
    this.tv.setChannel(channel);
  }

  mute() {
    console.log("Advanced Remote: Mute TV");
  }
}
function main() {
  const sonyTV = new SonyTV();
  const lgTV = new LGTV();

  const basicRemoteForSony = new BasicRemote(sonyTV);
  const advancedRemoteForLG = new AdvancedRemote(lgTV);

  basicRemoteForSony.on(); // Output: Basic Remote: Power ON\nSony TV is ON
  basicRemoteForSony.setChannel(5); // Output: Basic Remote: Set channel to 5\nSony TV channel set to 5
  basicRemoteForSony.off(); // Output: Basic Remote: Power OFF\nSony TV is OFF

  advancedRemoteForLG.on(); // Output: Advanced Remote: Power ON\nLG TV is ON
  advancedRemoteForLG.setChannel(10); // Output: Advanced Remote: Set channel to 10\nLG TV channel set to 10
  advancedRemoteForLG.mute(); // Output: Advanced Remote: Mute TV
  advancedRemoteForLG.off(); // Output: Advanced Remote: Power OFF\nLG TV is OFF
}

main();
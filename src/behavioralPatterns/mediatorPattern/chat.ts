// Mediator interface
interface ChatMediator {
  sendMessage(message: string, sender: User): void;
}

// Colleague (User) interface
interface User {
  name: string;
  send(message: string): void;
  receive(message: string, sender: User): void;
}

class ChatRoom implements ChatMediator {
  users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User) {
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(message, sender);
      }
    }
  }
}
class ChatUser implements User {
  name: string;
  mediator: ChatMediator;

  constructor(name: string, mediator: ChatMediator) {
    this.name = name;
    this.mediator = mediator;
  }

  send(message: string) {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string, sender: User) {
    console.log(`${this.name} received a message from ${sender.name}: ${message}`);
  }
}
const chatRoom = new ChatRoom();

const user1 = new ChatUser('Alice', chatRoom);
const user2 = new ChatUser('Bob', chatRoom);
const user3 = new ChatUser('Charlie', chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.send('Hello everyone!');
user3.send('Hi Alice, nice to meet you!');
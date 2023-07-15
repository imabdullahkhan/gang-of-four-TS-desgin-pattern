import TreeClient from "./TreeClient";
import TreeFactory from "./TreeFactory";

const factory = new TreeFactory();

const tree1 = new TreeClient('pine', 'pine_tree.png', 10, 20, factory);
const tree2 = new TreeClient('oak', 'oak_tree.png', 30, 40, factory);
const tree3 = new TreeClient('pine', 'pine_tree.png', 50, 60, factory);

tree1.render();
tree2.render();
tree3.render();

console.log(`Number of flyweights created: ${factory.getFlyweightCount()}`);
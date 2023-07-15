import LoggerSingleTon from "./logger";



let instance1 = LoggerSingleTon.getInstance();
let instance2 = LoggerSingleTon.getInstance();

console.log(instance1 == instance2);

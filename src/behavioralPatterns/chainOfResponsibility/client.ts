import { FiftyDollarHandler, TenDollarHandler } from "./handler";

const fiftyHandler = new FiftyDollarHandler();
const tenHandler = new TenDollarHandler();

fiftyHandler.setNext(tenHandler);
fiftyHandler.dispatch(110);


export default class LoggerSingleTon {

  private static logger: LoggerSingleTon;
  private constructor() {

  }

  public static getInstance(): LoggerSingleTon {
    if (!this.logger) {
      this.logger = new LoggerSingleTon();
      return this.logger
    } else {
      return this.logger
    }
  }
  public logging() {
    console.log("I AM LOGGING FROM LOGGING METHOD")
  }
}
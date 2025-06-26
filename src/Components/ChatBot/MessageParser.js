class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes('help')) {
        this.actionProvider.handleHelp();
      }
  
      if (lowercase.includes('hello') || lowercase.includes('hi')) {
        this.actionProvider.handleGreet();
      }
    }
  }
  
  export default MessageParser;
  
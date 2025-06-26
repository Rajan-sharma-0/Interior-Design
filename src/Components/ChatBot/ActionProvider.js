class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    handleGreet() {
      const message = this.createChatBotMessage('Hello. Nice to meet you.');
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    handleHelp() {
      const message = this.createChatBotMessage('Sure, how can I assist you with your interior design needs?');
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'DesignBot',
  initialMessages: [createChatBotMessage('Hi! How can I help you with your interior design needs?')],
  customComponents: {},
  customStyles: {},
};

export default config;

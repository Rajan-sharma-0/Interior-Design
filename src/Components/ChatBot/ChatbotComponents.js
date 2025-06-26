import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Config'; 
import MessageParser from './MessageParser'; 
import ActionProvider from './ActionProvider'; 
import './ChatbotComponents.css';

const ChatbotComponent = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleToggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="chatbot-container">
      <button onClick={handleToggleChatbot} className="chatbot-button">
        Let's Chat
      </button>
      {showChatbot && (
        <div className="chatbot">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;

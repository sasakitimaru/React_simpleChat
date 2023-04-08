import React from 'react'

const ChatWindow = ({messages,MyID}) => (
    <div className="chat-window">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`message ${message.sender === MyID ? 'you' : 'other'}`}>
            <p>{message.text}</p>
          </div>
        ))}
    </div>
)

export default ChatWindow;
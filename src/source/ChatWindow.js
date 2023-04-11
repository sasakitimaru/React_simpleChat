import React from 'react'
import style from "./App.module.css";

const ChatWindow = ({messages,MyID}) => (
    <div className={style.chatwindow}>
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`${style.message} ${message.sender === MyID ? style.you : style.other}`}>
            <p>{message.text}</p>
          </div>
        ))}
    </div>
)

export default ChatWindow;
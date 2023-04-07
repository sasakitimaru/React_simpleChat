import React, { useState, useEffect,useRef } from "react";
import { io } from "socket.io-client";
import {ChatWindow, ChatForm, } from "./source/index";
import "./App.css";

function App() {
  const socketRef = useRef();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socketRef.current = io("http://localhost:5001");

    socketRef.current.on("previous messages", (previousMessages) => {
      setMessages(previousMessages);
    });

    socketRef.current.on("chat message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <ChatWindow messages={messages} />
      <ChatForm input={input} setInput={setInput} socketRef={socketRef} />
    </div>
  );
}

export default App;


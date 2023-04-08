import React, { useState, useEffect,useRef } from "react";
import { io } from "socket.io-client";
import {ChatWindow, ChatForm, } from "./source/index";
import "./App.css";

function App() {
  const socketRef = useRef();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    socketRef.current = io("http://localhost:5001");

    socketRef.current.on("previous messages", (previousMessages) => {
      setMessages(previousMessages);
    });

    socketRef.current.on("chat message", (messageObj) => {
      setMessages((messages) => [...messages, messageObj]);
    });

    socketRef.current.on("Your id", (id) => {
      setId(id);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <ChatWindow messages={messages} MyID={id}/>
      <ChatForm input={input} setInput={setInput} socketRef={socketRef} MyID={id}/>
    </div>
  );
}

export default App;


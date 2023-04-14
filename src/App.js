import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Auth } from "aws-amplify";
import {ChatWindow, ChatForm, Sidebar } from "./source/index";
// import RegistrationForm from "./RegistrationForm";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import style from "./source/App.module.css";

function App() {
  const socketRef = useRef();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [id, setId] = useState("");
  const [sidebarvisible , setSidebarvisible] = useState(false);

  useEffect(() => {
    socketRef.current = io("http://localhost:5001");

    socketRef.current.on("previous messages", (previousMessages) => {
      setMessages(previousMessages);
    });

    socketRef.current.on("chat message", (messageObj) => {
      setMessages((messages) => [...messages, messageObj]);
    });

    // socketRef.current.on("Your id", (id) => {
    //   setId(id);
    // });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setId(user.attributes.name);
        console.log("userID:", user.attributes.name);
      } catch (error) {
        console.log("error fetching user:", error);
      }
    }
    fetchUser();
  }, []);

  const toggleSidebar = () => {
    setSidebarvisible(!sidebarvisible);
  }

  return (
    <div className={style.App}>
      <ChatWindow messages={messages} MyID={id}/>
      <ChatForm input={input} setInput={setInput} socketRef={socketRef} MyID={id}/>
      <button onClick={toggleSidebar} className={style.hamburgerMenu}>☰</button>
      {sidebarvisible && <Sidebar />}
    </div>
  );
}

export default App;


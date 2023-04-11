import React from 'react';
import HandleSubmit from "./handleSubmit";
import style from "./App.module.css";
const ChatForm = ({input,setInput,socketRef,MyID}) => {

    const handleSubmit = (e) => {
        HandleSubmit(e,input,socketRef,setInput,MyID);
    }
    return(
        <form className={style.formApp} onSubmit={handleSubmit}>
            <input className={style.inputApp}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
            />
            <button className={style.buttonApp} type="submit">Send</button>
        </form>
    )
}
export default ChatForm;
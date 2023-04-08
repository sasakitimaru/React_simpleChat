import React from 'react';
import HandleSubmit from "./handleSubmit";

const ChatForm = ({input,setInput,socketRef,MyID}) => {

    const handleSubmit = (e) => {
        HandleSubmit(e,input,socketRef,setInput,MyID);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
            />
            <button type="submit">Send</button>
        </form>
    )
}
export default ChatForm;
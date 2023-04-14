// import axios from "axios";

const HandleSubmit = (e,input, socketRef,setInput,MyID) => {
  // const END_POINT = "http://localhost:3003/messages";

    // const MessagePost =async (message) => {
    //   console.log("Sending message:", message)
    //   return await axios.post(END_POINT, message)
    // };

    e.preventDefault();
    if (input.trim()) {
      const messageObj = { text: `${MyID}: ${input}`, sender: MyID , date: new Date().toDateString};
      // MessagePost(messageObj);
      console.log("Sending message:", messageObj);

      socketRef.current.emit("chat message", messageObj);
      setInput("");
    }
  };
  export default HandleSubmit;
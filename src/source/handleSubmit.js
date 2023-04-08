const HandleSubmit = (e,input, socketRef,setInput,MyID) => {
    e.preventDefault();
    if (input.trim()) {
      const messageObj = { text: input, sender: MyID};
      console.log("Sending message:", messageObj);
      socketRef.current.emit("chat message", messageObj);
      setInput("");
    }
  };
  export default HandleSubmit;
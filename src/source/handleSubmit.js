const HandleSubmit = (e,input, socketRef,setInput) => {
    e.preventDefault();
    if (input.trim()) {
      const messageObj = { text: input, sender: "you" };
      console.log("Sending message:", messageObj);
      socketRef.current.emit("chat message", { text: input, sender: "you" });
      setInput("");
    }
  };
  export default HandleSubmit;
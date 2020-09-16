import React, { useState } from "react";
import "./ChatScreen.css";

import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "manpal",
      image: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
      message: "hi, whats up",
    },
    {
      name: "ravi",
      image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
      message: "there?",
    },
    {
      name: "manpal",
      image: "https://homepages.cae.wisc.edu/~ece533/images/peppers.png",
      message: "all good",
    },
    {
      image: "https://homepages.cae.wisc.edu/~ece533/images/peppers.png",
      message: "fine",
    },
    {
      image: "https://homepages.cae.wisc.edu/~ece533/images/peppers.png",
      message: "what about you?",
    },
  ]);

  const handleSend = e => {
      e.preventDefault();
      setMessages([...messages, {message:input}]);
      setInput('')
  }
  return (
    <div className="chat-screen">
      <p className="chat-screen-timestamp">
        You matched with Manpal on 16/09/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chat-screen-message">
            <Avatar
              className="chat-image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatscreen-text">{message.message}</p>
          </div>
        ) : (
          <div className="chat-screen-message">
            <p className="chatscreen-text-user">{message.message}</p>
          </div>
        )
      )}

      <form className="chatscreen-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatscreeen-input-field"
          placeholder="Type a message..."
          type="text"
        />
        <button onClick={handleSend} type='submit' className="chatscreen-input-button">SEND</button>
      </form>
    </div>
  );
};

export default ChatScreen;

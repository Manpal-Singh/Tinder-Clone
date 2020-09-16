import React from "react";
import "./Chats.css";
import Chat from "../../component/chat/Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Manpal"
        message="Hi, how are you?"
        timestamp="20 minute ago"
        profilePic=""
      />
      <Chat
        name="Ravi Singh"
        message="Hi, how are you?"
        timestamp="20 minute ago"
        profilePic=""
      />
      <Chat
        name="Naman verma"
        message="Hi, how are you?"
        timestamp="20 minute ago"
        profilePic=""
      />
      <Chat
        name="Mannu Singh"
        message="Hi, how are you?"
        timestamp="20 minute ago"
        profilePic=""
      />
    </div>
  );
};

export default Chats;

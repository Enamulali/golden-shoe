import React from "react";
import ChatBot from "react-simple-chatbot";

const Chat = () => {
  return (
    <div>
      <ChatBot
        steps={[
          {
            id: "hello-world",
            message: "Hello How can we help?",
            end: true,
          },
        ]}
      />
    </div>
  );
};

export default Chat;

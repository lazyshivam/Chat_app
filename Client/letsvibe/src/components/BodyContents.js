import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function BodyContents({ socket, username, password }) {
  const [currentmessage, setCurrentmessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const sendmessage = async () => {
    if (currentmessage !== "") {
      const messageData = {
        password: password,
        author: username,
        message: currentmessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes() +
          ":" +
          new Date(Date.now()).getSeconds(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      //   console.log(data);
      // var data=data;
      setMessageList((list) => [...list, data]);

      io.socket.removeAllListeners();
    });
  }, [socket]);

  return (
    <>
      <div className="content">
        <div className="contact-profile">
          <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
          <p>Harvey Specter</p>
          <div className="social-media">
            <i className="fa-solid fa-video" aria-hidden="true"></i>
            <i className="fa-solid fa-square-phone-flip" aria-hidden="true"></i>
          </div>
        </div>
        <div className="messages">
          {messageList.map((messageContent) => {
            return (
              <ul>
                <li className={username===messageContent.author?"replies":"sent"}>
                  <img
                    src="http://emilcarlsson.se/assets/mikeross.png"
                    alt=""
                  />
                  <p>
                    {messageContent.message}
					<br />
				 <span id={username===messageContent.author?"right":"left"}>{messageContent.time}</span>
               
                  </p>
				 
                </li>
				
              </ul> 
            );
          })}
         
        </div>
        <div className="message-input">
          <div className="wrap">
            <input
              type="text"
              placeholder="Write your message..."
              onChange={(event) => {
                setCurrentmessage(event.target.value);
              }}
			  onKeyPress={(event)=>{
				
					event.key==="Enter" &&sendmessage();
			  }}
            />
            <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
            <button className="submit" onClick={sendmessage}>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyContents;

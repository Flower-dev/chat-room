import React from "react";
import {useNavigate} from "react-router-dom";

export default function ChatBody ({messages, typingStatus, lastMessageRef}) {
    const navigate = useNavigate()
  

    const handleLeaveChat = () => {
        localStorage.removeItem("userName")
        navigate("/")
        window.location.reload()
    }
  
    return (
        <>
            <header className="chat__mainHeader">
                <p>My channel</p>
                <button className="leaveChat__btn" onClick={handleLeaveChat}>
                    Leave chat
                </button>
            </header>
            {/*This shows messages sent from you*/}
            <div className="message__container">
                {messages.map((msg) => msg.name === localStorage.getItem('userName') ? (
                    <div className="message__chats" key={msg.id}>
                        <p className="sender__name">You</p>
                        <div className="message__sender">
                            <p>{msg.text}</p>
                        </div>
                    </div>    
                ) : (
                    <div className="message__chats" key={msg.id}>
                        <p>{msg.name}</p>
                        <div className="message__recipient">
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}

                {/*This is triggered when a user is typing*/}
                <div className="message__status">
                    <p>{typingStatus}</p>
                </div>
                <div ref={lastMessageRef} />
            </div>
        </>
    )
}
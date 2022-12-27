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
        <div>ChatBody</div>
    )
}
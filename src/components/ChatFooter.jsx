import React, { useState } from "react";

export default function ChatFooter ({ socket }) {
    const [ message, setMessage ] = useState("");

    const handleTyping = () => {
        socket.emit('typing', `${localStorage.getItem('userName')} is typing`);
    };

    // The handleSendMessage function checks if 
    // the text field is empty and if the username exists 
    // in the local storage (sign-in from the Home page) 
    // before sending the message event containing 
    // the user input, username, the message ID generated, 
    // and the socket or client ID to the Node.js server.

    const handleSendMessage = (e) => {
        e.preventDefault();
        if(message.trim() && localStorage.getItem('userName')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('userName'),
                id: `${socket.id}${Math.random()}`,
                socketId: socket.id,
            })
        }
        setMessage('');
    }

    return (
        <div className="chat__footer">
            <form className="form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Write message"
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleTyping}
                />
                <button className="sendBtn">Send</button>
            </form>
        </div>
    )
}
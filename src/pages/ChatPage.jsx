import React, {useState, useEffect, useRef} from 'react';

import ChatBar from "../components/ChatBar";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";

export default function ChatPage({ socket }) {
    const [ messages, setMessages ] = useState([]);
    const [typingStatus, setTypingStatus] = useState('');
    const lastMessageRef = useRef(null);

    useEffect(() => {
        socket.on(
            'messageResponse', (data) => setMessages([...messages, data])
        );
    }, [socket, messages]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages]);

    useEffect(() => {
        socket.on('typingResponse', (data) => setTypingStatus(data));
    }, [socket]);
    
    return (
        <section className="chat">
            <ChatBar socket={ socket }/>
            <section>
                <ChatBody 
                    messages={messages} 
                    typingStatus={typingStatus}
                    lastMessageRef={lastMessageRef}
                />
                <ChatFooter socket={ socket }/>
            </section>
        </section>
    );
};
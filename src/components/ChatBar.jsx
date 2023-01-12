import React, { useState, useEffect } from "react";

export default function ChatBar ({ socket }) {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data));
    }, [socket, users]);

    return (
        <section>
            <h2 className="chat__title">Chat 💬</h2>
            <section>
                <h4 className="chat__header">Active users</h4>
                <div className="chat__users">
                    {users.map((user) => (
                        <p key={user.socketId}>{user.userName}</p>
                    ))}
                </div>
            </section>
        </section>
    );
}
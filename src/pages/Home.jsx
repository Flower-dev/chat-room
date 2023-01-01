import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import Button from "../components/atoms/Button";

export default function Home({ socket }) {
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("userName", userName);
		socket.emit("newUser", {userName, socketId: socket.id});
		navigate("/chat");
	};

	return (
		<form className='home__container' onSubmit={handleSubmit}>
			<h2 className='home__header'>Sign in to Open Chat</h2>
			<input 
				type='text' 
				minLength={6} 
				name='username' 
				placeholder="Username"
				id='username'
				className='username__input' 
				value={userName} 
				onChange={e => setUserName(e.target.value)}
			/>
			<Button className='home__cta'>Sign In</Button>
		</form>
	);
};

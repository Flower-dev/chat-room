import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import Button from "../components/atoms/Button";
// assets
import Img from "../assets/home.svg";

export default function Home({socket}) {
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("userName", userName);
		socket.emit("newUser", {userName, socketId: socket.id});
		navigate("/chat");
	};

	return (
		<section className='home__container'>
			<h2 className='home__header'>Welcome back! 👋🏻</h2>

			<div>
				<img src={Img} className='home__img'/>
				
				<form onSubmit={handleSubmit} className='home__form'>
					<h3 className='home__header'>Login</h3>
					<input 
						type='text' 
						minLength={6} 
						name='username' 
						placeholder='Username'
						id='username'
						className='username__input' 
						value={userName} 
						onChange={e => setUserName(e.target.value)}
					/>
					<Button className='home__cta'>Sign In</Button>
				</form>
			</div>
		</section>
	);
}

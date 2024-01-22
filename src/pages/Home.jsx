import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import Button from "../components/atoms/Button";


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
		<main className="px-14 py-14 flex justify-center justify-items-center">
			<section className='rounded-xl shadow-2xl px-2 py-2'>
				<h2 className='uppercase'>Welcome back! 👋🏻</h2>
				<form onSubmit={handleSubmit} className='flex flex-col gap-3'>
					<h3 className=''>Login</h3>
					<input 
						type='text' 
						minLength={6} 
						name='username' 
						placeholder='Username'
						id='username'
						className='border-2 border-lime-700 rounded-lg px-1 py-1' 
						value={userName} 
						onChange={e => setUserName(e.target.value)}
					/>
					<Button className='bg-lime-700 rounded-lg py-1.5 text-lime-200 uppercase'>Sign In</Button>
				</form>
			</section>
		</main>
	);
}

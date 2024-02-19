import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// layout 
import AuthLayout from "../components/layout/authLayout";
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
		<AuthLayout>
			<section className='rounded-xl shadow-2xl p-5'>
				<h2 className='uppercase'>Welcome back! 👋🏻</h2>
				<form onSubmit={handleSubmit} className='flex flex-col gap-3'>
					<h3 className=''>Login</h3>
					<input 
						type='text' 
						minLength={6} 
						name='username' 
						placeholder='Username'
						id='username'
						className='border border-cyan-900 rounded-lg px-1 py-1' 
						value={userName} 
						onChange={e => setUserName(e.target.value)}
					/>
					<Button className='bg-cyan-600 rounded-lg py-1.5 text-cyan-900 uppercase'>Sign In</Button>
				</form>
			</section>
		</AuthLayout>
	);
}

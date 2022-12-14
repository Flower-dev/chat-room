import React from "react";
import { BrowserRouter } from "react-router-dom";
import socketIO from "socket.io-client";
// routes
import Router from "./routes/routes";
// styles
import "./App.css";

const socket = socketIO.connect("http://localhost:8080");


function App() {
	return (
		<div className='App__container'>
			<BrowserRouter>
				<Router socket={socket}/>
			</BrowserRouter>
		</div>
	);
}

export default App;

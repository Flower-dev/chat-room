import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import socketIO from "socket.io-client";

import Home from "./components/Home";
import ChatPage from "./components/ChatPage";

const socket = socketIO.connect("http://localhost:8080");


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home socket={socket} />}></Route>
				<Route path="/chat" element={<ChatPage socket={socket} />}></Route>
			</Routes>
		</BrowserRouter>
		
	);
}

export default App;

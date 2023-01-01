import React from "react";
import { BrowserRouter } from "react-router-dom";
import socketIO from "socket.io-client";

import Router from "./routes/routes";

const socket = socketIO.connect("http://localhost:8080");


function App() {
	return (
		<BrowserRouter>
			<Router socket={socket}/>
		</BrowserRouter>
		
	);
}

export default App;

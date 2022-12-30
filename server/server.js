const express = require('express');
const app = express();
const PORT = 8080;
const http = require('http').Server(app);
const cors = require('cors');
// à changer avec ws
const socketIO = require('socket.io')(http, { 
	cors: {
	  origin: "http://localhost:3000"
	}
});

app.use(cors());
let users = [];



socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`)  
    // sends the message to all the users on the server
    socket.on("message", data => {
      socketIO.emit("messageResponse", data)
    })

    socket.on("typing", data => (
      socket.broadcast.emit("typingResponse", data)
    ))

    socket.on("newUser", data => {
      users.push(data)
      socketIO.emit("newUserResponse", users)
    })
 
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
      users = users.filter(user => user.socketId !== socket.id)
      socketIO.emit("newUserResponse", users)
      socket.disconnect()
    });
});

app.get('/api', (req, res) => {
	res.json({
		message: 'Hello'
	});
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

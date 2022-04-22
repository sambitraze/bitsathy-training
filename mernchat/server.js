const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const formatMessages = require('./utils/formatMessages');
const {userJoin , getCurrentUser} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('join', (username, room) => {
        const user = userJoin(socket.id, username, room);
        console.log(user);
        socket.join(user.room);
        socket.emit('message', formatMessages('MERNBOT', 'Welcome to the chat app'));
        socket.broadcast.to(user.room).emit('message', formatMessages('MERNBOT', `${user.username} has joined the room`));
    })
    // socket.emit('message', formatMessages('MERNBOT', 'Welcome to the chat app'));
    // socket.broadcast.emit('message', formatMessages('MERNBOT', 'New user joined'));
    socket.on("disconnect", () => {
        io.emit('message', formatMessages('MERNBOT', 'A user has left'));
    })
    socket.on("sendMessage", (message) => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessages(user.username, message));
    })
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
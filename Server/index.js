const express = require('express');
const cors=require('cors');
const http=require('http');
const app = express();
const {Server}=require('socket.io');
// const port = 3000;

app.use(cors());
// server is created and working successfully.
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST'],
    }
});

io.on('connection',(socket)=>{
   console.log(`User connected:${socket.id}`);
   
   socket.on('join_room',(data)=>{
    socket.join(data);
    console.log(`User with ID:${socket.id} joined the chat:${data}`)
   })

   socket.on('disconnect',()=>{
    console.log("User disconnected:",socket.id);
   })
});

server.listen(3001,()=>{
    console.log("server is running");
})
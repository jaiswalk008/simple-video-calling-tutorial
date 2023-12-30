const {Server} = require('socket.io');

const io = new Server(8000 , {
    cors:true,
});

const emailToSocketIdMap = new Map();
const socketIdToEmailMap = new Map();
//io refers to socket.io server instance
io.on('connection' , (socket) =>{
    console.log('socket connected:' +socket.id);
    /*socket.on('room:join', data => {...}): This sets up a listener for the 'room:join'
     event on the socket object. When a client sends a 'room:join' event,
      the provided callback function is executed, and it receives the data object 
      sent by the client. */
    socket.on('room:join',data =>{
        const  {email , room} = data;
        emailToSocketIdMap.set(email , socket.id);
        socketIdToEmailMap.set(socket.id,email);
        //it will send  the data to same client who joined using the socket
        io.to(room).emit('user:joined', {email, id:socket.id});
        socket.join(room);
        io.to(socket.id).emit('room:join',data)
    })
    socket.on('user:call',({to,offer}) =>{
        
        io.to(to).emit('incomming:call' , {from:socket.id , offer});
    })

    socket.on('call:accepted', ({to , ans}) =>{
        io.to(to).emit('call:accepted' , {from:socket.id , ans});
    })
})

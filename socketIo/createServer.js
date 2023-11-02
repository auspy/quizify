// creating a server

const {createServer} = require('http');
const {Server} = require('socket.io');

const httpServer = createServer();

const io = new Server(httpServer, { 
     cors: {
        origin: '*',
        methods: ['GET', 'POST']
     }
 });



// // when websocket is connected from the cleint side
// // when user is connected to the server

// io.on('connection', async (socket) => { 
//     // console.log(socket.id);

//     // event from the client to the server

//     socket.on('myevent', (arg1, arg2, callback) => { 
//     //    console.log(data);
//         // socket.emit('responseEvent', {name: 'Priyanka', surname:"shah"});
//         callback({status: 'ok'});
//     });

//     // remocve all the listners

//     // socket.removeAllListeners();

//     socket.onAny((eventName, ...args) => { 
//         console.log(eventName);
//     });

//     socket.prependAny((eventName, ...args) => { 
//         console.log(eventName);
//     });

//     socket.offAny()

//     socket.onAnyOutgoing();


// });

 




//  httpServer.listen(3003, () => { 
//         console.log('Server is listening on port 3003');
//  });




// Socket.IO server listens for incoming connections
io.on('connection', (socket) => {
    console.log(' user connected hai');
  
    // a message
    socket.emit('connected', 'You are connected to the server!');
  });
  
  // Start the HTTP server on a specific port
  const PORT = process.env.PORT || 3001;
  httpServer.listen(PORT, () => {
    console.log(`Socket.IO server running on port ${PORT}`);
  });

  
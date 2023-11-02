// here we integrate all the socket.io code 
// use client jo ki render hoga client brower per

'use client' 

import React, {useState, useEffect} from 'react';

import io from 'socket.io-client';

const [buttonCont, setButtonCont] = useState('Send Event');
const [buttonCont2, setButtonCont2] = useState('Send Event2');
export default function ClientMessage(props) {
    const socket = io('http://localhost:3003');  // yaha kon se port per connect kr rhe ho tum log ip address bata do ya port main 3003 use kiya wahi connect kr diya hai 

    useEffect(() => {
        socket.on("connect", () => { 
          console.log(socket.id);
           })
// get the event form the server

socket.on("responseEvent", (data) => {
      setButtonCont('Recived response form the server' +data);
})

           return () => {
              socket.disconnect()
           };
        }, []);
    
        // How to intract between client and server - some evenets

        const sendSocketEvent = () => {
           //  event from the client to the server
           socket.emit('myevent1', 'a');
        }  

        const sendSocketEvent2 = () => {
            //  event from the client to the server
            socket.emit('myevent2', 'a');
         } 



        return (
            <>
            <button style={{width: '100px', height:'auto', margin: '30px'}} onClick={sendSocketEvent}>
             {buttonCont}
            </button>

            <button style={{width: '100px', height:'auto', margin: '30px'}} onClick={sendSocketEvent2}>
             {buttonCont2}
            </button>

            </>
        )

}
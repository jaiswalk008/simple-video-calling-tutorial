import React, { useContext, useMemo } from "react";
import {io} from 'socket.io-client' 
const socketContext = React.createContext(null);

export const useSocket = () =>{
    const socket = useContext(socketContext);
    return socket;
}
export const SocketContextProvider = (props) =>{
    //The io('localhost:8000') function call initializes a Socket.IO client
    // and connects it to the server at the specified address, 
    //in this case, 'localhost:8000'. 
    const socket = useMemo(() => io('localhost:8000'), [])
    return <socketContext.Provider value={socket}>{props.children}</socketContext.Provider>
}
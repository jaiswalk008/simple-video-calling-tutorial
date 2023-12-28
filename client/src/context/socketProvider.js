import React, { useContext, useMemo } from "react";
import {io} from 'socket.io-client' 
const socketContext = React.createContext(null);

export const useSocket = () =>{
    const socket = useContext(socketContext);
    return socket;
}
export const SocketContextProvider = (props) =>{
    const socket = useMemo(() => io('localhost:8000'), [])
    return <socketContext.Provider value={socket}>{props.children}</socketContext.Provider>
}
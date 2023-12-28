    import React, { useCallback, useState ,useEffect } from 'react';
    import { useSocket } from '../context/socketProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
    const Lobby = () =>{
        const [email , setEmail] =useState('')
        const [room , setRoom] =useState('');
        const socket = useSocket();
        const history = useHistory();
        // console.log(socket)
        const handlerJoinRoom = useCallback((data) =>{
            const {email,room} = data;
            console.log(email , room);
            history.push(`/room/${room}`);
        }, [history]);
        const handleSubmitForm = useCallback((e) =>{
            e.preventDefault();
            // console.log(email ,room)
            socket.emit('room:join' , {email ,room})
        },[email , room , socket])

        useEffect(()=>{
            socket.on('room:join',handlerJoinRoom);
            return () =>{
                socket.off('room:join' ,handlerJoinRoom)
            }
        },[socket , handlerJoinRoom])

        return (
            <div>
                <h1>Lobby</h1>
                <form onSubmit={handleSubmitForm}>
                    <label htmlFor='email'>Email Id</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} id='email' type='email' name='email'/><br></br>
                    <label htmlFor='room'>Enter room id</label>
                    <input  value={room} onChange={(e) => setRoom(e.target.value)} id='room' type='room' name='room'/> <br></br>
                    <button>Join</button>
                </form>
            </div>
        )
    }
    export default Lobby;

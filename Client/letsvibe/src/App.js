// import logo from './logo.svg';
import './App.css';
import './LoginPage.css';
import io from "socket.io-client";
// import BodyContents from './components/BodyContents';
import LoginPage from './components/LoginPage';
// import SidePanel from './components/SidePanel';
import { useState } from 'react';

const socket=io.connect('http://localhost:3001');

function App() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  
  const joinRoom=()=>{
    if(username!=="" && password!==""){
      socket.emit("join_room",password);
    }
  }
  return (
   <>
   <LoginPage setUsername={setUsername} setPassword={setPassword} joinRoom={joinRoom}/>
   {/* <div id="frame">
    <BodyContents/>
    <SidePanel/>
   </div> */}
   </>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import './LoginPage.css';
import io from "socket.io-client";
import BodyContents from './components/BodyContents';

import SidePanel from './components/SidePanel';
import { useState  } from 'react';
import LoginPage from './components/LoginPage';

const socket=io.connect('http://localhost:3001');

function App() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [show,setShow]=useState(false);
  const joinRoom=()=>{
    if(username!=="" && password!==""){
      socket.emit("join_room",password);
    }
    if(username!=="" && password!=="" ){
      setShow(true);
    }
  }
 
  
  
  return (
   <>
   {!show?(
   <LoginPage setUsername={setUsername} setPassword={setPassword} joinRoom={joinRoom} />
   ):(
    <div id="frame">
     <BodyContents socket={socket } username={username } password={password}/>
     <SidePanel/>
    </div>
    )} 
   </>
  );
}

export default App;

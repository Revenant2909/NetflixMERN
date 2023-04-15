import { useState } from "react";
import "./login.scss"; 
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { login } from "../../authContext/apiCalls";


export default function Login() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const {dispatch} = useContext(AuthContext);
  const handleLogin = (e) => {
      e.preventDefault();
      login({email,password},dispatch);
  }
     return ( <div className="login"> 
     <div className="top"> 
     <div className="wrapper"> 
     <img className="logo" 
     src="https://i.ibb.co/jhRbKdT/580b57fcd9996e24bc43c529.png" 
     alt="580b57fcd9996e24bc43c529" border="0"/> </div>
      </div>
 <div className="container"> 
  <form>
    <h1>Sign In</h1>
    <input type="Email" placeholder="Email or Phone number" onChange={(e)=>setEmail(e.target.value)}/>
    <input type="Password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <button className="loginButton" onClick={handleLogin}>Sign In</button>
    <span>
    New to Netflix? <b> Sign up now. </b>
    </span>
    <small>
    This page is protected by Google reCAPTCHA to ensure you're not a bot.
    <b className="learn"> Learn more. </b>
    </small>
  </form>
 </div>
  </div> ) }
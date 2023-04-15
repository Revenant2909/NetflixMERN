import { useRef, useState } from "react";
import "./register.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Register() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[username,setUsername] = useState("");
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
        
    const handleStart = () => {
        setEmail(emailRef.current.value)
    };
    const handleFinish = async (e) => {
        e.preventDefault();
        setUsername(usernameRef.current.value);
        setPassword(passwordRef.current.value);
        try {
            await axios.post("auth/register",{email,username,password});
            history.push("/login");
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <div className="register">
           <div className="top">
            <div className="wrapper">

          <img className="logo" src="https://i.ibb.co/jhRbKdT/580b57fcd9996e24bc43c529.png" alt="580b57fcd9996e24bc43c529" border="0"/>
            <button className="loginButton"> Sign In </button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies,TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ? (
                <div className="input">
            <input type="email" placeholder=" Email address" ref= {emailRef}/>
            <button className="registerButton"onClick={handleStart}>Get Started </button>
            </div>
            ): (
            <form className="input">
            <input type="username" placeholder="username" ref= {usernameRef}/>
            <input type="password" placeholder="password" ref= {passwordRef}/>
            <button className="registerButton"onClick={handleFinish}>Start </button>
            </form>) }
        </div>
    </div>
  )
}

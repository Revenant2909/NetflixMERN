import "./login.scss"; 
export default function Login() {
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
    <input type="Email" placeholder="Email or Phone number" />
    <input type="Password" placeholder="Password" />
    <button className="loginButton">Sign In</button>
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
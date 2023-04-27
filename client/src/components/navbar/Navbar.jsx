import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import "./navbar.scss"
import{Link} from "react-router-dom";

const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false);
  window.onscroll = ()=> {
    setIsScrolled(window.pageYOffset===0 ? false : true);
    return () => (window.onscroll= null);
   };
  return (
    <div className={isScrolled ? "navbar scrolled": "navbar"}>
        <div className="container">
            <div className="left">
            <img src="https://i.ibb.co/jhRbKdT/580b57fcd9996e24bc43c529.png" alt="Netflix logo" border="0" width="110" height="60" />
            <Link to="/" className="link">
            <span>Home</span>
            </Link>
            <Link to="/series" className="link">
            <span>TV Shows</span>    
            </Link>
            <Link to="/movies" className="link">
            <span>Movies</span>    
            </Link>    
            <Link to="/latest" className="link">
            <span>New & Popular</span>   
            </Link>    
            <span>My List</span>    
            <span>Browse by Languages</span>    
            </div>
            <div className="right">
                <Search className="navbar-icons"/>
                <span>KID</span>
                <Notifications className="navbar-icons"/>
                <img src="https://i.ibb.co/1nkPyfs/Netflix-avatar.png" alt="Netflix-avatar" width= "40px"border="0"/>
                <div className="profile">
                <ArrowDropDown className="navbar-icons"/>
                <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
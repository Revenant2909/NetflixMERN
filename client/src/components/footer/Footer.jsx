import React from 'react'
import "./footer.css";
import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';
export default function footer() {
  return (
    <>
    <div className="footcontainer">
    <div className="social-icons">
        <Facebook className='social-icon'/>
        <Twitter className='social-icon'/>
        <Instagram  className='social-icon'/>
        <YouTube  className='social-icon'/>
        </div>    
    <ul className="footermain">
        <li className="footer-link-wrapper">
            <span className="footer-link-content">  Audio Description </span>
        </li>
        <li className="footer-link-wrapper">
            <span className="footer-link-content">  Help Centre </span>
        </li>
        <li className="footer-link-wrapper">
            <span className="footer-link-content">  Gift Cards </span>
        </li>
        {/* <li className="footer-link-wrapper">
            <span className="footer-link-content">  Audio Description </span>
        </li>
        <li className="footer-link-wrapper">
            <span className="footer-link-content">  Audio Description </span>
        </li> */}
        
    </ul>
    </div>
    </>
  )
}

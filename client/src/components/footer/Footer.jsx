import React from 'react'
import "./footer.scss";
import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';
export default function footer() {
  return (
   <>
    <div className="footer">
    <div className="social-icons">
        <Facebook className='social-icon'/>
        <Twitter className='social-icon'/>
        <Instagram  className='social-icon'/>
        <YouTube  className='social-icon'/>
    </div> 
      <div className="container">
     
      <div class="sub-links">
        <ul className='footerList'>
          <li>Audio Description</li>
          <li>Audio and Subtitles</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
      </div>
      </div>

        <div className="bottom">
            <h2>Netflix</h2>
            <span>©Ritesh Nahavre 2023</span>
      </div>
    </div>
    </>

  )
}

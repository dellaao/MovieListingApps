import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <img id="logo" src="images/olaf.png" alt="logo" />
        <div className="links">
        <a href="">Follow Us</a>
        </div>
        <div className="socials">
        <a href="">
            <img src="images/icon-facebook.svg" alt="ic-fb" />
        </a>
        <a href="">
            <img src="images/icon-instagram.svg" alt="ic-ig" />
        </a>
        <a href="">
            <img src="images/icon-twitter.svg" alt="ic-tw" />
        </a>
        <a href="">
            <img src="images/icon-pinterest.svg" alt="ic-pin" />
        </a>
        </div>
  </div>
  )
}

export default Footer
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ROWEN PEEBLES</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><AiOutlineLinkedin/></a>
        <a href="https://instagram.com"><AiOutlineGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ROWEN PEEBLES. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
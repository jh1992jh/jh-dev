import React from 'react'
import {miscImages} from '../../imagesAndIcons/images';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footerLeft">
    <img src={miscImages.logo} alt="logo"/>
    </div>
    <div className="footerMiddle">
      <span className="footerSquare" />
      <span className="footerSquare" />
      <span className="footerSquare" />
      <span className="footerSquare" />
    </div>
    <div className="footerRight" />
    </footer>
  )
}

export default Footer;
import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Modal from '../modal/Modal';
import { NavIcon, NavOption } from '../../imagesAndIcons/icons';

class Navbar extends Component {
  state = {
    open: false,
    showModal: false
  }

  toggleNav = () => {
    const { open } = this.state;
    this.setState({open: !open});
  }

  toggleModal = (e) => {
    const { showModal } = this.state;
    console.log(e.target.className);
    if(e.target.className === "aboutBtn" || e.target.className === "modalBackground" || e.target.className === "closeBtn") {
      this.setState({showModal: !showModal});
    }
  }
  render() {
    const { open, showModal } = this.state;
    return (
      <nav className="topNav">
        <NavIcon toggleNav={this.toggleNav} />
        <a href="https://github.com/jh1992jh"  target="_blank" rel="noopener noreferrer" className="githubUrl">
        <i className="fab fa-github"></i>
        </a>
        <button className="aboutBtn" onClick={this.toggleModal}>About</button>
        {open ? (
          <ul>
            <li>
              <NavOption />
              <Link  to="socialFeed" spy={true} smooth={true} duration={1000}>SocialFeed</Link>
            </li>
            <li>
              <NavOption />
              <Link  to="sassyMusicPlayer" spy={true} smooth={true} duration={1000}>Sassy-Musicplayer</Link>
            </li>
            <li>
              <NavOption />
              <Link  to="filtermatic" spy={true} smooth={true} duration={1000}>FilterMatic</Link>
            </li>
            <li>
              <NavOption />
              <Link  to="reactLandingPage" spy={true} smooth={true} duration={1000}>React-LandingPage</Link>
            </li>
          </ul>
        ) : null}

        {showModal ? <Modal toggleModal={this.toggleModal} /> : null}
      </nav>
    )
  }
}

export default Navbar;
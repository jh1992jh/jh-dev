import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { ArrowDown } from '../../imagesAndIcons/icons';
import ReduxLogo from '../../imagesAndIcons/iconsSVG/reduxLogo.svg';


class Header extends Component {
  render() {
    return (
      <header className="header">
      <div className="headerText">
        Hi, i'm Jani. I'm a <span>frontend-developer</span> with some backend skills.
        Projects on this page use. <span>React</span>, Redux, NodeJS, MongoDB, Express, <span>JavaScript</span>, CSS3, <span>Sass</span>

        <Link to="socialFeed" spy={true} smooth={true} duration={1000} className="forMobile">
        <button>
        More Info <ArrowDown />
        </button>
        </Link>
      </div>

      <div className="icons">
      <i className="devicon-react-original colored" />
      <i className="devicon-nodejs-plain" />
      <i className="devicon-javascript-plain" />
      <img src={ReduxLogo} alt="redux"/>
      <i className="devicon-sass-original" />
      <i className="devicon-express-original" />
      <i className="devicon-mongodb-plain-wordmark" />
      <i className="devicon-html5-plain-wordmark" />
      <i className="devicon-css3-plain-wordmark colored" />
      </div>

      <Link to="socialFeed" spy={true} smooth={true} duration={1000} className="forDesktop">
      <button>
      More Info <ArrowDown />
      </button>
      </Link>
      </header>
    )
  }
}

export default Header;
import React from 'react'
import { miscImages } from '../../imagesAndIcons/images';
import ReduxLogo from '../../imagesAndIcons/iconsSVG/reduxLogo.svg';

const Modal = ({ toggleModal }) => {
  return ( 
    <div onClick={toggleModal} className="modalBackground">
      <div className="modalWrapper">
      <div className="forMobile">
        <span className="closeBtn" onClick={toggleModal}>X</span>
      </div>
      <img src={miscImages.myOwnPic} className="aboutImg" alt="me" />
      <div className="aboutSkills">
        <h3>Skills</h3>

        <div className="skillsTab">
          <span className="skill">
            React  <i class="devicon-react-original colored" />
          </span>
          <span className="skill">
         NodeJS <i class="devicon-nodejs-plain" />
          </span>
          <span className="skill">
         JavaScript <i class="devicon-javascript-plain" />
          </span>
          <span className="skill">
            Redux <img src={ReduxLogo} alt="redux"/>
          </span>
          <span className="skill">
          Sass <i class="devicon-sass-original" />
          </span>
          <span className="skill">
          expressJS <i class="devicon-express-original" />
          </span>
          <span className="skill">
          MongoDB <i class="devicon-mongodb-plain-wordmark" />
          </span>
          <span className="skill">
          HTML5 <i class="devicon-html5-plain-wordmark" />
          </span>
          <span className="skill">
        CSS3  <i class="devicon-css3-plain-wordmark colored" />
          </span>
        </div>
      </div>
      <div className="aboutText">
      <p>
      I've started learning to code in the Fall of 2018. I was listening to Tim Ferris Podcast and heard a mention of FreeCodeCamp. I immediately went to FreeCodeCamp, created an account, and fell in love with code and what I could do with it. Later on I've discovered Udemy, an amazing learning resource with ample courses. It was on Udemy that my real learning began. When I started learning JavaScript and React, it clicked for me that this what I want to do for a living. Since then I've created many projects. Some provided by courses, others as self-directed exploration into the world of possible.
      </p>
      </div>
      </div>
    </div>
  )
}

export default Modal;
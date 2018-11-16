import React, { Component, Fragment } from 'react';
import LinesLoader from './components/loaders/LinesLoader'; 
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import { projectsInfo } from './projectsInfo';
import { Element } from 'react-scroll';


// react-scroll example <h3><Link to="test1" spy={true} smooth={true} duration={2000}>Test 1</Link> </h3>
// <Element name="test1">Test1</Element>

// react-lazy-load
class App extends Component {
  state = {
    loading: true
  }

  componentDidMount () {

    setTimeout(() => {
      this.setState({ loading: false });
    },3200)  
  }
  render() {

    const { loading } = this.state;
    return (
      <Fragment>
      {loading ? ( 
        <LinesLoader />
      ) : (
        <div className="App">
        <Navbar />
        <Header />
        <Element name="socialFeed">
        <Project 
        title={projectsInfo[0].title}
        desc={projectsInfo[0].desc}
        technologies={projectsInfo[0].technologies}
        desktopImg={projectsInfo[0].desktop}
        mobile1Img={projectsInfo[0].mobile1}
        mobile2Img={projectsInfo[0].mobile2}
        side1="left"
        side2="right"
        projectURL="https://tranquil-taiga-96610.herokuapp.com/login"
        />
        </Element>
        <Element name="sassyMusicPlayer">
        <Project 
        title={projectsInfo[1].title}
        desc={projectsInfo[1].desc}
        technologies={projectsInfo[1].technologies}
        desktopImg={projectsInfo[1].desktop}
        mobile1Img={projectsInfo[1].mobile1}
        mobile2Img={projectsInfo[1].mobile2}
        side1="right"
        side2="left"
        projectURL="https://jh1992jh.github.io/sassy-musicplayer/"
        />
        </Element>
        <Element name="filtermatic">
        <Project 
        title={projectsInfo[2].title}
        desc={projectsInfo[2].desc}
        technologies={projectsInfo[2].technologies}
        desktopImg={projectsInfo[2].desktop}
        mobile1Img={projectsInfo[2].mobile1}
        mobile2Img={projectsInfo[2].mobile2}
        side1="left"
        side2="right"
        projectURL="https://jh1992jh.github.io/filtermatic/"
        />
        </Element>
        <Element name="reactLandingPage">
        <Project 
        title={projectsInfo[3].title}
        desc={projectsInfo[3].desc}
        technologies={projectsInfo[3].technologies}
        desktopImg={projectsInfo[3].desktop}
        mobile1Img={projectsInfo[3].mobile1}
        mobile2Img={projectsInfo[3].mobile2}
        side1="right"
        side2="left"
        projectURL="https://jh1992jh.github.io/react-landing-page/"
        />
        </Element>
       <Footer />
      </div>
      )}
      </Fragment>
    );
  }
}

export default App;

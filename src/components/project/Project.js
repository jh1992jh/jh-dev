import React, { Component } from 'react';

class Project extends Component {
  render() {
    const { title, desc, technologies, desktopImg, mobile1Img, mobile2Img, side1, side2 } = this.props;
    return (
      <div className="project">
        <div className={`projectImages ${side1}`}>
            <img src={desktopImg} alt="project-desktop" className="desktop"/>
            <div className="mobilePics">
            <img src={mobile1Img} alt="project-mobile" className="mobile"/>
            <img src={mobile2Img} alt="project-mobile" className="mobile"/>
            </div>
        </div>
        <div className={`projectInfo ${side2}`}>
            <h3>{title}</h3>

            <div className="info">
                <p>{desc}</p>

                <ul>
                  {technologies.map(technology => <li>{technology}</li>)}
                </ul>
            </div>

            <button>Click to View</button>
        </div>
      </div>
    )
  }
}

export default Project;
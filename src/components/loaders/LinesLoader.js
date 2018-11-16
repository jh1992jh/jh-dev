import React, { Component } from 'react'

class LinesLoader extends Component {
    state = {
        activeLine: 0,
    }

componentDidMount () {
    this.lineAnim = setInterval(() => {        
            this.setState((prevState) => {
                return {
                    activeLine: prevState.activeLine === 6 ? 0 : prevState.activeLine + 1
                }
            })

    }, 500)

}

componentWillUnmount () {
    clearInterval(this.lineAnim);
}
  render() {
      
    const { activeLine } = this.state;

    return (
        <div className="linesLoader" >
        <div className="loadingText">
            <span style={activeLine === 0 ? {animation: 'textAnim1 0.25s infinite alternate'} : null}>L</span>
            <span  style={activeLine === 1 ? {animation: 'textAnim1 0.25s infinite alternate'} : null}>o</span>
            <span  style={activeLine === 2 ? {animation: 'textAnim1 0.25s infinite alternate'} : null}>a</span>
            <span  style={activeLine === 3 ? {animation: 'textAnim1 0.25s infinite alternate'} : null}>d</span>
            <span  style={activeLine === 4 ? {animation: 'textAnim1 0.25s infinite alternate'} : null}>i</span>
            <span  style={activeLine === 5 ? {animation: 'textAnim1 0.25s infinite alternate'} : null}>n</span>
            <span  style={activeLine === 6 ? {animation: 'textAnim1 0.25s infinite alternate'} : null}>g</span>
        </div>
        <div className="linesContainer">
        <div className="line" style={activeLine === 0 ? {animation: 'lineAnim1 0.25s infinite alternate'} : null} />
        <div className="line" style={activeLine === 1 ? {animation: 'lineAnim1 0.25s infinite alternate'} : null}/>
        <div className="line" style={activeLine === 2 ? {animation: 'lineAnim1 0.25s infinite alternate'} : null}/>
        <div className="line" style={activeLine === 3 ? {animation: 'lineAnim1 0.25s infinite alternate'} : null}/>
        <div className="line" style={activeLine === 4 ? {animation: 'lineAnim1 0.25s infinite alternate'} : null}/>
        <div className="line" style={activeLine === 5 ? {animation: 'lineAnim1 0.25s infinite alternate'} : null}/>
        <div className="line" style={activeLine === 6 ? {animation: 'lineAnim1 0.25s infinite alternate'} : null}/>
        </div>
      </div>
    )
  }
}

export default LinesLoader;
import React, { Component } from 'react'

class RandomNo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        random: null,
      }
    }

  
    handleClick = () => {
     const num = Math.floor(Math.random()*10)
     return num;
        };
  

  
    render() {
      return (
        <div>
            <div></div>
            <div>
          <button onClick={this.handleClick}>Click me</button>
          </div>
          {this.state.random}
        </div>
      );
    }
  }
  

export default RandomNo

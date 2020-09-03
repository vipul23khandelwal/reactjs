import React, { Component } from 'react'

class RandomNo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        random: null,
      }
    }
  
    min = 1;
    max = 10;
  
    handleClick = () => {
      this.setState({random: this.min + (Math.random() * (this.max - this.min))});
      console.log('random')
        };
  

        handleClick2 = () => {
            this.setState(
                {random: this.min + (Math.random() * (this.max - this.min))}            );
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

import React, { Component } from "react";

class RandomN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list1: [],
      list2: [],
      count1: 0,
      count2: 0,
      completed: false,
      sum1: null,
      sum2: null,
      visible1: false,
      visible2: true,
      player1count: 0,
      player2count: 0
    };
  }

 

  componentDidUpdate() {
    if (this.state.count1 === 10 && this.state.count2 === 10) {
      if (this.printsum1() > this.printsum2()) {
         return("Player 1");
      } else {
        return ('player 2');
      }
    }
  }

  setComplete = () => {
    this.setState({
      ...this.state,
      completed: true
    });
  };

  genRandom = () => {
    const num = Math.floor(Math.random() * 10);
    return num;
  };

  handleClick1 = () => {
    if (this.state.count1 >= 10) {
      return;
    }
    this.setState({
      ...this.state,
      count1: this.state.count1 + 1,
      visible1: true,
      visible2: false
    });
    this.state.list1.push(this.genRandom());
    // console.log(this.state.list1);
  };

  handleClick2 = () => {
    if (this.state.count2 >= 10) {
      return;
    }
    this.setState({
      ...this.state,
      count2: this.state.count2 + 1,
      visible1: false,
      visible2: true
    });
    this.state.list2.push(this.genRandom());
    // console.log(this.state.list2);
    if(this.state.count1 === this.state.count2){
      // if(this.state.list1[this.state.count1 -1] > this.state.list2[this.state.count2 -1]){
      //   this.setState({
      //     ...this.state,
      //     player1count: this.state.player1count + 1
      //   })
      // }else{
      //   this.setState({
      //     ...this.state,
      //     player2count: this.state.player2count + 1
      //   })
      // }
    } 
  };

  printsum1() {
    let sum = 0;
    this.state.list1.map((i) => {
      sum = sum + i;
      return null;
    });
    return sum;
  }

  printsum2() {
    let sum = 0;
    this.state.list2.map((i) => {
      sum = sum + i;
      return null;
    });
    return sum;
  }

  render() {
    return (
      <>
<div>
  winner is : {this.componentDidUpdate()}
</div>
    <div style={{ float:"left"}}>Player 1: {this.state.player1count}</div>
    <div style={{float:"right"}}>{this.state.player2count} :Player 2</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh"
          }}
        >
          {this.state.completed ? <div>Completed!</div> : null}
          <div>
            <button onClick={this.handleClick1} disabled={this.state.visible1}>
              Clicked {this.state.count1} times{" "}
            </button>
          </div>
          <div>
            <button onClick={this.handleClick2} disabled={this.state.visible2}>
              Clicked {this.state.count2} times
            </button>
          </div>
          <br />
        </div>
        <div style={{ float: "left" }}>
          {this.state.list1.map((a) => {
            return <span key={Math.random()}> {a}, </span>;
          })}
          <br />
          Sum of List 1: {this.printsum1()}
        </div>
        <div style={{ float: "right" }}>
          {this.state.list2.map((a) => {
            return <span key={Math.random()}> {a}, </span>;
          })}
          <br />
          Sum of List 2: {this.printsum2()}
        </div>
      </>
    );
  }
}

export default RandomN;
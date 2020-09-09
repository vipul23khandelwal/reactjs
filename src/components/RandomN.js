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
      visible1: false,
      visible2: true,
      player1count: 0,
      player2count: 0
    };
  }

  componentDidUpdate() {
    if (this.state.count1 === 10 && this.state.count2 === 10) {
      if (this.state.player1count > this.state.player2count) {
        return "Player 1";
      } 
      else if(this.state.player1count===this.state.player2count){
        return 'draw';
      }
      else {
        return "Player 2";
      }
    }
  }


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
    this.state.list2.push(this.genRandom());
    if (
      this.state.list1[this.state.list1.length - 1] >
      this.state.list2[this.state.list2.length - 1]
    ) {
      this.setState({
        ...this.state,
        player1count: this.state.player1count + 1,
        count2: this.state.count2 + 1,
        visible1: false,
        visible2: true
      });
    } else if (
      this.state.list1[this.state.list1.length - 1] <
      this.state.list2[this.state.list2.length - 1]
    ) {
      this.setState({
        ...this.state,
        player2count: this.state.player2count + 1,
        count2: this.state.count2 + 1,
        visible1: false,
        visible2: true
      });
    }
  };

  // printsum1() {
  //   let sum = 0;
  //   this.state.list1.map((i) => {
  //     sum = sum + i;
  //     return null;
  //   });
  //   return sum;
  // }

  // printsum2() {
  //   let sum = 0;
  //   this.state.list2.map((i) => {
  //     sum = sum + i;
  //     return null;
  //   });
  //   return sum;
  // }

  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" , alignItems:"center"}}>
          Winner is : {this.componentDidUpdate()}
        </div>
        <div style={{ float: "left" }}>Player 1: {this.state.player1count}</div>
        <div style={{ float: "right" }}>
          {this.state.player2count} :Player 2
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh"
          }}
        >
          <div>
            <button onClick={this.handleClick1} disabled={this.state.visible1}>
              {this.state.count1 === 10
                ? "Completed"
                : ` Clicked  ${this.state.count1} Times `}
            </button>
          </div>
          <div>
            <button onClick={this.handleClick2} disabled={this.state.visible2}>
              {this.state.count2 === 10
                ? "Completed"
                : ` Clicked  ${this.state.count2} Times `}
            </button>
          </div>
          <br />
        </div>
        <div style={{ float: "left" }}>
          {this.state.list1.map((a) => {
            return <span key={Math.random()}> {a}, </span>;
          })}
        </div>
        <div style={{ float: "right" }}>
          {this.state.list2.map((a) => {
            return <span key={Math.random()}> {a}, </span>;
          })}
        </div>
      </>
    );
  }
}

export default RandomN;

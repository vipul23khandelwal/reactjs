import React, { Component } from 'react';
import RandomN from './RandomN';

class  RandomNo extends Component{
  constructor(porps){
      super(props);
      this.state = {
        list1:[],
        list2:[],
        count1:0,
        count2:0,
        completed:false,
        Buttonvisiable1:true,
        Buttonvisiable2:false,
        playercount1:0,
        playercount2:0
      }

genRandom = () => {
    const num= Math.floor(Math.random() *10)
    return num
}

handelClick1 = () => {
    if(this.state.count1 >10){
        return
    }
this.setState({
    ...this.state,
    count1:this.state.count1 +1,
    Buttonvisiable1:true,
    Buttonvisiable2:false
})
this.state.list1.push(this.genRandom());
}

handelClick2 = () => {
    if(this.state.count1 >10){
        return
    }
this.setState({
    ...this.state,
    count1:this.state.count2 +1,
    Buttonvisiable1:false,
    Buttonvisiable2:true
})
this.state.list1.push(this.genRandom());
}



  }
}

export default RandomNo;
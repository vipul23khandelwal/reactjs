import React from 'react';
import './App.css';
import {Name} from './components/Name';
import ClassCom from './components/ClassCom';
import Hello from './components/Hello';
import Visitor from './components/Visitor';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import RandomNo from './components/RandomNo';
import RandomN from './components/RandomN';

function App() {
  return (
    <div className="App">
    {/* function components */}
      {/* <Name name="vipul" nickname="vk">
      <p>
        this is pera</p></Name>
      <Name name="shyam" nickname="shamu">
        <button>click me!</button>
      </Name>
      <Name name="ram" nickname="ramu"/> */}

      {/* <Visitor name="user" /> */}
      {/* <Name name="vipul" nickname="vk"></Name>
    <Counter /> */}

{/* <FunctionClick />
<ClassClick /> */}
{/* <EventBind></EventBind> */}
 <RandomN />

    </div>
  );
}

export default App;

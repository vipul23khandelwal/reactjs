import React from 'react';
import './App.css';
import RandomN from './components/RandomN';
import ClassCom from './components/ClassCom';

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
<RandomN />
{/* <FunctionClick />
<ClassClick /> */}
{/* <EventBind></EventBind> */}
    </div>
  );
}

export default App;

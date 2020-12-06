import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import List from "./List";
import Card from "./Card";

function App() {
  return (
    <div className="App">

      <Heading /> 
      <List />
      <h1>My Contacts</h1>
    <Card name="Jack" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"  
    tel="+123 456 789" mail="b@beyonce.com"/>
    <Card name="Tony" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"  
    tel="+123 456 532" mail="Stark@Jarvis.com"/>
    </div>
  );
}



export default App;

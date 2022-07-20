import React from "react";
import './App.css';
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import State from "./components/State";
import StateSecond from "./components/StateSecond";
import StateThird from "./components/StateThird";

function App() {
  return (
    <div className="w3-content" style={{maxWidth: "1400px"}}>

      <Header
        title="My blog One"
        class="color"/>
      <Header
        title="My blog Two"
        class="color1"/>
      <Header
        title="My blog Three"
        class="color2"/>

      <div className="w3-row">
        <BlogEntries/>
        <State/>
        <StateSecond/>
        <StateThird/>
      </div>


    </div>
  );
}

export default App;

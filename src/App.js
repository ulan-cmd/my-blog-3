import React from "react";
import './App.css';
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import IntroductionMenu from "./components/IntroductionMenu";
import Footer from "./components/Footer";
import {ComponentA, ComponentC} from "./components/componentA/ComponentA";


function App() {

  return (
    <>

      <div className="w3-content" style={{maxWidth: "1400px"}}>

        <Header/>

        <div className="w3-row">
          <BlogEntries/>
          <IntroductionMenu/>
        </div>

      </div>

      <Footer/>

    </>
  );
}

export default App;

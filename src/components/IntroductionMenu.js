import React from "react";
import AboutCards from "./AboutCards";
import PopularPosts from "./PopularPosts";
import Tags from "./Tags";

const IntroductionMenu = () => {

  return (
    <div className="w3-col l4">

      <AboutCards/>

      <PopularPosts/>

      <Tags/>

    </div>
  );
}

export default IntroductionMenu;
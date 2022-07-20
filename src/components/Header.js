import React from "react";

const Header = (props) => {
  return (
    <header className="w3-container w3-center w3-padding-32">
      <h1 className={props.class}><b>{props.title}</b></h1>
    </header>
  );
}

export default Header;
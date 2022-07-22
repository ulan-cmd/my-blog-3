import React, {useState} from "react";
import {tags} from "../constants"


const Tags = () => {

  const Tag = (props) => {

    const [className, setClassName] = useState(false);

    function setClass2() {
      setClassName("w3-tag w3-light-grey w3-small w3-margin-bottom");
    }

    // const setClass = () => {
    //   setClassName(className);
    // }

    return (
      <span
        onClick={() => setClassName(!className)}
        className={className ? "w3-tag w3-black w3-margin-bottom" : "w3-tag w3-light-grey w3-small w3-margin-bottom"}
        style={margin}>
            {props.name}
      </span>
    );
  }

  const margin = {
    marginRight: '5px'
  }

  const tagsArray =
    tags.map(item => (
        <Tag name={item}/>
      )
    )

  return (
    <>

      <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
          <h4 className="text__red">Tags</h4>
        </div>
        <div className="w3-container w3-white">
          <p>
            {tagsArray}
          </p>
        </div>
      </div>
    </>
  );
}

export default Tags;
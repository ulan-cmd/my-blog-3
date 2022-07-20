import React, {useState} from "react";

const State = () => {

  let [text, setText] = useState('No click');

  const check = () => {
    if (text === "No click") {
      setText("click");
    } else {
      setText('No click');
    }
  }

  return (
    <div className="container">
      <button onClick={check}>Click me</button>
      <p>{text}</p>
    </div>
  );
}

export default State;
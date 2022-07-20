import React, {useState} from "react";

const StateThird = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button onClick={() => setCount(count + 1)}>Увеличиваем на 1</button>
      <button onClick={() => setCount(count + 5)}>Увеличиваем на 5</button>
      <button onClick={() => setCount(count + 10)}>Увеличиваем на 10</button>
      <p>{count}</p>
    </div>
  );
}

export default StateThird;
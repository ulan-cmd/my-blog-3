import React, {useState} from "react";

const StateSecond = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button onClick={() => setCount(count - 1)}>Уменьшаем на 1</button>
      <button onClick={() => setCount(count + 1)}>Увеличиваем на 1</button>
      <p>{count}</p>
    </div>
  );
}

export default StateSecond;
import React, {useState} from "react";

const StateSecond = () => {

  const [count, setValue] = useState(0)
  return (
    <div className="container">
      <button onClick={() => setValue(count - 1)}>Уменьшаем на 1</button>
      <button onClick={() => setValue(count + 1)}>Увеличиваем на 1</button>
      <p>{count}</p>
    </div>
  );
}

export default StateSecond;
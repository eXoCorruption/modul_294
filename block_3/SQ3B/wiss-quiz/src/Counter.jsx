import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const erhoehen = () => {
    setCount(count + 1);
  };

  const verringern = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  const plusZehn = () => {
    setCount(count + 10);
  }

  const minusZehn = () => {
    setCount(count - 10);
  }

  return (
    <div>
      <p>Aktueller Zähler: {count}</p>
      <button onClick={erhoehen}>+1</button>
      <button onClick={plusZehn}>+10</button>
      <button onClick={verringern}>-1</button>
      <button onClick={minusZehn}>-10</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
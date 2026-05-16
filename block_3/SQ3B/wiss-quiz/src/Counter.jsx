import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [istSichtbar, setIstSichtbar] = useState(true);
  const [titel, setTitel] = useState('Mein Counter:');
  const [countClicks, setCountClicks] = useState(0);

  const erhoehen = () => {
    setCount(count + 1);
    setCountClicks(countClicks + 1);
  };

  const verringern = () => {
    setCount(count - 1);
    setCountClicks(countClicks + 1);
    if (count < 1) {
        setCount(0);
    }

  };

  const reset = () => {
    setCount(0);
    setCountClicks(countClicks + 1);
  };

  const plusZehn = () => {
    setCount(count + 10);
    setCountClicks(countClicks + 1);
  };

  const minusZehn = () => {
    setCount(count - 10);
    setCountClicks(countClicks + 1);
    if (count < 1) {
        setCount(0);
    }
  };

  const toggle = () => {
    setIstSichtbar(!istSichtbar);
    setCountClicks(countClicks + 1);
  };

  return (
    <div>
      <button onClick={toggle}>
        {istSichtbar ? 'Counter Verstecken' : 'Counter Anzeigen'}
      </button>

      {istSichtbar && (
      <div>
        <p> {titel} </p>
        <p>Anzahl aller Buttons geklickt: {countClicks}</p>
        <p>Aktueller Zähler: {count}</p>
        <button onClick={erhoehen}>+1</button>
        <button onClick={plusZehn}>+10</button>
        <button onClick={verringern}>-1</button>
        <button onClick={minusZehn}>-10</button>
        <button onClick={reset}>Reset</button>
      </div>
     )}
    </div>
  );
}

export default Counter;
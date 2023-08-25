import React from 'react';
import '../style.css';
import { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick}></MyButton>
      <MyButton count={count} onClick={handleClick}></MyButton>
    </div>
  );
};

export default App;
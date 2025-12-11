import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    if (counter === 100) {
      return alert("Your Counter will be 20");
    }
    setCounter((prev) => prev + 1);
  }

  function decreaseCounter() {
    if (counter < 1) {
      return alert("Your Counter will be 0");
    }
    setCounter((prev) => prev - 1);
  }

  function jumpByfive() {
    if (counter === 100) {
      return alert("Your Counter will be 100");
    }
    setCounter((prev) => prev + 5);
  }

  return (
    <div className="parent">
      <h3> Counter : {counter}</h3>
      <button onClick={increaseCounter}> increase Counter</button>
      <button onClick={decreaseCounter}> decraese Counter</button>
      <button onClick={jumpByfive}>Jump By Five</button>
    </div>
  );
}

export default Counter;
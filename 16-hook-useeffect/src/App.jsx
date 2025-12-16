import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    console.log("use effect running...");
  }, [num2]);

  return (
    <>
      <div>
        {" "}
        number is {num} <br /> number2 is {num2}
      </div>
      <button onClick={() => setNum(num + 1)}>Click</button>
      <button onClick={() => setNum2(num2 + 10)}> Click 2 </button>
    </>
  );
}

export default App;

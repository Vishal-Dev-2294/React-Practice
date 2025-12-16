import React from "react";

function App() {

  const getData = () => {
    
  }

  return (
    <div className="h-screen bg-black p-4 text-white">
      <button onClick={getData} className="bg-green-600 active:scale-90 mb-3 px-5 py-2 rounded text-white ">
        {" "}
        get data
      </button>
    </div>
  );
}

export default App;

import React from "react";

function Button() {
  function btnClicked() {
    console.log("button is clicked");
  }

  return (
    <div>
      <button onClick={btnClicked}> Click me </button>
      <button
        onDoubleClick={function () {
          console.log("Buttn is Double clicked");
        }}
      >
        Click me Double
      </button>
    </div>
  );
}

export default Button;

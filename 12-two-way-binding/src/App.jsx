import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log("Form Submited by " , user);
    setUser("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={user}
        onChange={function (e) {
          setUser(e.target.value);
        }}
        placeholder="Enter your Name"
      />
      <button type="submit"> Submit </button>
    </form>
  );
}

export default App;

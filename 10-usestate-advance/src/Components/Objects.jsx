import { useState } from "react";

function Objects() {
  const [user, setUser] = useState({ name: "Vishal", age: 21 });

  const btnClicked = () => {
    // const users = { ...user };
    // users.name = "Roshan"
    // users.age = 25
    // setUser(users)
    setUser((prev) => ({ ...prev, name: "Roshan", age: 25 }));
  };

  const [chotu, setChotu] = useState([
    "Vishal",
    "Roshan",
    "Deepak",
    "Omprakash",
  ]);

  const btnClickedd = () => {
    const dost = [...chotu];
    dost.push("Jagmag");
    setChotu(dost);
  };

  return (
    <div className="parent">
      <div>
        <h3>
          Name : {user.name} <br />
          Age : {user.age}
        </h3>
        <button onClick={btnClicked}>Click me</button>
      </div>

      <div className="div2">
        <h3>{chotu}</h3>
        <button onClick={btnClickedd}>Click me</button>
      </div>
    </div>
  );
}

export default Objects;

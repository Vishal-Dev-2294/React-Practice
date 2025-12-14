import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("https://picsum.photos/v2/list");
    setData(data);
  };

  return (
    <>
      <button onClick={getData}> Get data </button>
      <div>
        {" "}
        {data.map((elem, idx) => {         
          return <h1 key={idx}> {elem.author} </h1>;
        })}{" "}
      </div>
    </>
  );
}

export default App;

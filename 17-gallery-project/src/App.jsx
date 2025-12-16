import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userdata, setUserdata] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=10"
    );
    setUserdata(data);
  };

  useEffect(() => {
    getData();
  }, []);

  let pritnUserData = <h3 className="text-lg font-bold"> Loading...... </h3>;

  if (userdata.length > 0) {
    pritnUserData = userdata.map((elem, idx) => {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden rounded">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt="Image not loaded"
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="h-screen bg-black overflow-auto p-4 text-white">
      <div className="flex flex-wrap gap-4 text-white p-2">{pritnUserData}</div>
      <div className="flex justify-center items-center p-4 gap-4">
        <button className="bg-amber-500 text-sm cursor-pointer active:scale-95 rounded-md px-4 py-1 font-semibold">
          {" "}
          Prev{" "}
        </button>
        <button className="bg-amber-500 text-sm cursor-pointer active:scale-95 rounded-md px-4 py-1 font-semibold">
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = [...task];
    newTask.push({ heading, details });
    setTask(newTask);
    console.log("Form is submited");
    setHeading("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const deleteTask = [...task];
    deleteTask.splice(idx, 1);
    setTask(deleteTask);
  };
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={submitHandler}
        className="flex lg:w-1/2 gap-4 p-10 flex-col items-start"
      >
        <h1 className="text-4xl font-bold"> Add Notes </h1>
        <input
          type="text"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 font-medium border-2 rounded outline-none"
        />
        <textarea
          type="text"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          placeholder="Write Details Here"
          className="px-5 w-full py-2 h-25 font-medium border-2 rounded outline-none"
        />
        <button className="bg-white active:scale-95 text-black font-bold px-5 py-2 w-full rounded outline-none">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 bg-gray-950  p-10">
        <h1 className="text-4xl font-bold"> Recents Notes </h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 overflow-auto h-[95%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 relative py-8 px-4 w-40 rounded-xl bg-cover text-black bg-[url('https://img.freepik.com/free-vector/leafy-patterned-note-background_53876-97734.jpg?semt=ais_hybrid&w=740&q=80')] "
              >
                <h2
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="absolute cursor-pointer active:scale-125 top-3 right-3"
                >
                  {" "}
                  ❌{" "}
                </h2>
                <h3 className="leading-snug text-lg font-bold ">
                  {elem.heading}
                </h3>
                <p className="mt-5 leading-tight text-sm font-medium text-gray-500">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

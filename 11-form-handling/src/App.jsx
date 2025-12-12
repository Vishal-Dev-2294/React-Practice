import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function submitForm(e) {
    e.preventDefault();

    console.log(`Username: ${user}`);
    console.log(`Password: ${user}`);
    console.log(`Email: ${user}`);

    console.log("Form Submited");

    setUser("");
    setPassword("");
    setEmail("");
  }

  return (
    <div className="h-screen text-white bg-black flex justify-center items-center p-4">
      <div className="h-[90vh] w-full max-w-2xl rounded-4xl text-white border-2 border-gray-400 p-4 md:p-10">
        <div className="flex font-bold justify-center py-10 px-4 md:px-10">
          <h3 className="text-2xl md:text-3xl tracking-tight text-center">
            This is The Form Created By Me
          </h3>
        </div>

        <div className="flex justify-center py-5 px-4 md:px-15">
          <form
            onSubmit={submitForm}
            method="post"
            className="text-lg md:text-2xl p-5 w-full"
          >
            <div className="mb-6">
              Username :
              <input
                required
                className="rounded-xl border border-white px-3 py-2 ml-2 w-full md:w-auto"
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter Your Name"
              />
            </div>

            <div className="mb-6">
              Email :
              <input
                required
                className="rounded-xl border border-white px-3 py-2 ml-14 w-full md:w-auto"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
            </div>

            <div className="mb-6">
              Password :
              <input
                required
                className="rounded-xl border border-white px-3 py-2 ml-3 w-full md:w-auto"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
              />
            </div>

            <button
              type="submit"
              className="border-2 border-gray-400 rounded-3xl mt-6 py-2 px-6 md:px-12 hover:bg-gray-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

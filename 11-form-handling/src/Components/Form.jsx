import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e) {
    e.preventDefault();
    console.log("form submitted");

    console.log("Username:", user);
    console.log("Email:", email);
    console.log("Password:", password);

    setUser("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex justify-center py-5 px-15">
      <form
        onSubmit={submitForm}
        method="post"
        className="text-2xl p-5 ml-2 h-[70vh] font-bold"
      >
        Username :
        <input
          required
          className="rounded-xl border ml-2 border-white px-3"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter Your Name"
        />

        <br />

        Email :
        <input
          required
          className="rounded-xl border border-white mt-8 px-3 ml-14"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />

        Password :
        <input
          required
          className="rounded-xl border border-white mt-8 px-3 ml-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />

        <button
          type="submit"
          className="border-2 border-gray-400 rounded-3xl mt-70 ml-2 py-4 px-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

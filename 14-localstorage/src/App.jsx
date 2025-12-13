function App() {
  //  const user = {
  //   user: "Vishal",
  //   age: 21,
  //   bio: "Web developer"
  //  }

  //  localStorage.setItem("user" , JSON.stringify(user)) object string me convert karidya JSON.stringify ne

  let user = localStorage.getItem("user");
  console.log(user); // object milega string ke form me

  let users = JSON.parse(localStorage.getItem("user"));
  console.log(users); //isme JSON.parse ki madat se hamne user ko asli wali object me covert karke item get karliya hai

  return <div> App </div>;
}

export default App;

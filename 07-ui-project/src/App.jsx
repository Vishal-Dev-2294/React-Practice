import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";

function App() {
  const arr = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: "red",
      tag: "Satisfied",
    },

    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      color: "blue",
      tag: "Unsatisfied",
    },

    {
      img: "https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "green",
      tag: "Banked",
    },

    {
      img: "https://images.unsplash.com/photo-1590650467980-8eadfa86ff48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "grey",
      tag: "unbanked",
    },
  ];

  return (
    <>
      <Section1 user={arr} />
      <Section2 />
    </>
  );
}

export default App;

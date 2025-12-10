import React from "react";
import Navbar from "./Navbar";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";
import Page1content from "./Page1content";

function Section1(props) {

  return (
    <>
      <Navbar />
      <Page1content users={props.user}/>
    </>
  );
}

export default Section1;

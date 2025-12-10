import React from "react";
import Rightcardcontent from "./Rightcardcontent";

function Rightcard(props) {
  
  return (
    <>
      <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
        <Rightcardcontent img={props.img} color={props.color} tag={props.tag} id={props.id}/>
      </div>
    </>
  );
}

export default Rightcard;

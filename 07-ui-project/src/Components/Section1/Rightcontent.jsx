import React from "react";
import Rightcard from "./Rightcard";

function Rightcontent(props) {

  return (
    <div id="right" className="h-full rounded-4xl overflow-x-auto p-10 w-3/4 flex flex-nowrap gap-4">
      {props.users.map(function (elem,idx) {
        return <Rightcard img={elem.img} color={elem.color} tag={elem.tag} key={idx} id={idx}/>;
      })}
    </div>
  );
}

export default Rightcontent;

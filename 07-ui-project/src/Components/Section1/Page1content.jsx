import React from "react";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

function Page1content(props) {

  return (
    <div className="flex justify-between mb-20 gap-10 items-center h-[90vh] py-10 px-10">
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  );
}

export default Page1content;

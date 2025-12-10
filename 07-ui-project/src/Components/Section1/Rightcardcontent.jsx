import React from "react";

function Rightcardcontent(props) {

  return (
    <>
      <img
        src={props.img}
        alt="women img"
        className="h-full object-cover"
      />
      <div className="absolute p-8 h-full w-full top-0 left-0 flex justify-between flex-col">
        <h2 className="text-3xl bg-white text-black rounded-full h-12 w-12    flex justify-center font-bold items-center pr-1 pb-1 ">
          {props.id+1}
        </h2>
        <div>
          <p className="text-balance text-white leading-normal mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
            enim! Sapiente reiciendis id optio unde accusantium suscipit,
            aperiam molestiae! Aut blanditiis doloribus modi possimus vel quis
            harum explicabo accusamus mollitia?
          </p>
          <div className="flex justify-between items-center">
            <button style={{backgroundColor:props.color}}  className="px-8 py-2 rounded-full">
              {props.tag}
            </button>
            <button className="bg-blue-500 font-medium px-3 py-1 text-2xl rounded-full">
              →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rightcardcontent;

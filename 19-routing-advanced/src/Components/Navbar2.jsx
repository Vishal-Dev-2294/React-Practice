import { useNavigate } from "react-router-dom";

function Navbar2() {
  const navigate = useNavigate();
  return (
    <div className="bg-cyan-600 px-8 py-3">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-gray-600 text-lg py-3 px-5 rounded m-3 active:scale-95"
      >
        {" "}
        Navigate to Home Page
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-gray-600 text-lg py-3 px-5 rounded m-3 active:scale-95"
      >
        {" "}
        Back
      </button>
       <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-gray-600 text-lg py-3 px-5 rounded m-3 active:scale-95"
      >
        {" "}
        Next
      </button>
    </div>
  );
}

export default Navbar2;

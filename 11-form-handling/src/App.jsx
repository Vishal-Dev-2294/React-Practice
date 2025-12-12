import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {
  return (
    <div className="h-screen text-white bg-black flex justify-center items-center">
      <div className="h-[90vh] w-150 rounded-4xl text-white border-2 border-gray-400 ">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Card from "./Components/Card";

function App() {
  return (
    <div className="parent">
      <Card
        //Prop pass kiya hai
        user="Roshan Kushwaha"
        img="https://images.unsplash.com/photo-1765047625874-4dfd2f9c7ad7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Vishal Kushwaha"
        img="https://plus.unsplash.com/premium_photo-1764501602862-d61bdbf8dd1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Deepak Singh"
        img="https://images.unsplash.com/photo-1764248896275-4596aa5f814b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Shail Singh"
        img="https://images.unsplash.com/photo-1764911866769-bc27bb312c6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default App;

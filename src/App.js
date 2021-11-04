import React from "react";
import "./App.css";
import Nasa from "./nasa";

function App() {
  return (
    <div className="App">
      <h1>
        Picture of the Day! <span role="img" aria-label='go!'>🚀</span>
      </h1>
      <Nasa />
    </div>
  );
}

export default App;
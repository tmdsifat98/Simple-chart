import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Chart from "./Components/Chart";

const App = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <Chart/>
    </div>
  );
};

export default App;

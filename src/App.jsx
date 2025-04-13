import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Chart from "./Components/Chart";
import Premium from "./Components/Premium";
import axios from "axios";

const App = () => {
  const promisePremium = axios.get("subscription.json");
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Chart></Chart>
      <Suspense
        fallback={
          <h1 className="flex justify-center mt-40">
            <span className="loading loading-spinner text-warning"></span>
          </h1>
        }
      >
        <Premium promisePremium={promisePremium}></Premium>
      </Suspense>
    </div>
  );
};

export default App;

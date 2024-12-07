import React from "react";
import Card from "../3Dmodel/Card";
import Journey from "./Journey";
import Success from "./Success";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Card />
      </div>
      <Journey />
      <Success />
      <div className="w-full h-screen">
      </div>
      <div className="w-full h-screen">
      </div>
    </>
  );
};

export default Home;

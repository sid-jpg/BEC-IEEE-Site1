import React from "react";
import Card from "../3Dmodel/Card";
import Journey from "./Journey";
import Success from "./Success";
import ExecutiveTeam from "./ExecutiveTeam";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Card />
      </div>
      <Journey />
      <Success />
      <ExecutiveTeam />
      <div className="w-full h-screen">
      </div>
    </>
  );
};

export default Home;

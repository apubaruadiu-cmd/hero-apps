import React from "react";
import Hero from "../../components/Hero/Hero";
import Facts from "../../components/Facts/Facts";
import { useLoaderData } from "react-router";
import Apps from "../Apps/Apps";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
        <Hero></Hero>
        <Facts></Facts>
        <Apps data={data}></Apps>
    </div>
  );
};

export default Home;

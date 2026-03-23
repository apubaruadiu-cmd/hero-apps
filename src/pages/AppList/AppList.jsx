import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SingleApp from "../SingleApp/SingleApp";
import { IoSearch } from "react-icons/io5";

const AppList = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="max-w-11/12 mx-auto py-20">
      <div className="flex flex-col items-center gap-4 mb-10">
        <h2 className="text-5xl text-[#001931] font-bold">
          Our All Applications
        </h2>
        <p className="text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-[#001931] text-2xl font-semibold">
          ({filteredApps.length}) Apps Found
        </div>
        <form>
          <div className="flex items-center gap-2.5 border-1 border-[#D2D2D2] rounded-sm w-[400px] py-3 px-4">
            <IoSearch />
            <input
              className="focus:outline-none focus:border-transparent"
              type="text"
              placeholder="Search Apps"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredApps.map((singleApp) => (
          <SingleApp singleApp={singleApp}></SingleApp>
        ))}
      </div>
    </div>
  );
};

export default AppList;

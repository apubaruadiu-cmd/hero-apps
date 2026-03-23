import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import SingleApp from "../SingleApp/SingleApp";
import { IoSearch } from "react-icons/io5";
import appNotFound from "../../assets/app-not-found.png";

const AppList = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-11/12 mx-auto py-20">
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
          <div className="flex items-center gap-2.5 border border-[#D2D2D2] rounded-sm w-[400px] py-3 px-4">
            <IoSearch />
            <input
              type="text"
              placeholder="Search Apps"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:outline-none focus:border-transparent w-full"
            />
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredApps.length > 0 ? (
          filteredApps.map((singleApp) => (
            <SingleApp key={singleApp.id} singleApp={singleApp} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center min-h-[400px] gap-4">
            <img src={appNotFound} alt="App Not Found" className="w-64" />
            <h2 className="text-5xl font-semibold text-[#001931] mb-2">
              OPPS!! APP NOT FOUND
            </h2>
            <p className="text-xl text-[#627382] mb-4">
              The App you are requesting is not found on our system. Please try
              another app.
            </p>
            <Link
              to="/"
              className="w-[150px] h-[48px] px-4 py-3 rounded-sm bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold text-center"
            >
              Go Back!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppList;

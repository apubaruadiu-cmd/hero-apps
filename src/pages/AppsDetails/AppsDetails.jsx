import React from "react";
import { useLoaderData, useParams } from "react-router";
import { formatDownloads } from "../../utility/formatDownloads";
import download from '../../assets/download.png';
import rating from '../../assets/raing.png';
import review from '../../assets/review.png';

const AppsDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  const singleApp = data.find((app) => app.id === appId);
  const { image, title, companyName, downloads, reviews, ratingAvg, description } =
    singleApp;

  return (
    <div className="max-w-11/12 mx-auto py-20">
      <div className="flex gap-10 w-full items-start border-b-1 border-gray-300 pb-10 mb-10">
        <img src={image} alt="" />
        <div className="flex-1">
          <div className="border-b-1 border-gray-300 pb-7 mb-7">
            <h2 className="text-4xl font-bold text-[#001931]">{title}</h2>
            <p className="text-xl text-[#627382] mt-2">
              Developed by <strong className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{companyName}</strong>
            </p>
          </div>
          <div className="flex gap-6">
            <div className="w-[150px]">
                <img src={download} alt="" />
                <p className="my-2 text-md text-[#00193180]">Downloads</p>
                <div className="text-[40px] text-[#001931] font-extrabold">{formatDownloads(downloads)}</div>
            </div>
            <div className="w-[150px]">
                <img src={rating} alt="" />
                <p className="my-2 text-md text-[#00193180]">Average Ratings</p>
                <div className="text-[40px] text-[#001931] font-extrabold">{ratingAvg}</div>
            </div>
            <div className="w-[150px]">
                <img src={review} alt="" />
                <p className="my-2 text-md text-[#00193180]">Total Reviews</p>
                <div className="text-[40px] text-[#001931] font-extrabold">{formatDownloads(reviews)}</div>
            </div>
          </div>
          <button className="text-xl font-semibold py-3.5 px-5 bg-[#00D390] text-white rounded-sm mt-8 cursor-pointer">Install Now (291 MB)</button>
        </div>
      </div>
      <div className="border-t-1 border-gray-300 pt-10 mt-10">
        <h2 className="text-2xl font-semibold text-[#001931]">Description</h2>
        <div className="text-xl text-[#627382] mt-6">{description}</div>
      </div>
    </div>
  );
};

export default AppsDetails;

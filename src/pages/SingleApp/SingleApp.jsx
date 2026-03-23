import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { formatDownloads } from "../../utility/formatDownloads";

const SingleApp = ({ singleApp }) => {
  const { id, image, title, downloads, ratingAvg } = singleApp;
  return (
    <div>
      <Link to={`/appDetails/${id}`}>
        <div className="bg-white p-4 rounded-sm">
          <img className="h-[316px] rounded-lg w-full" src={image} alt="" />
          <h2 className="text-xl font-medium text-[#001931] my-4">{title}</h2>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 bg-[#F1F5E8] rounded-sm text-[#00D390] py-1.5 px-2.5">
              <FiDownload /> {formatDownloads(downloads)}
            </div>
            <div className="flex items-center gap-2 bg-[#FFF0E1] rounded-sm text-[#FF8811] py-1.5 px-2.5">
              <FaStar /> {ratingAvg}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleApp;

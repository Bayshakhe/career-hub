import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SingleAppliedJob = ({ singleData }) => {
  const {
    id,
    jobTitle,
    logo,
    salary,
    location,
    jobType,
    duration,
    companyName,
  } = singleData;
  // console.log(singleData);
  return (
    <div className="md:flex justify-between items-center border rounded p-8 md:mx-36 mb-5">
      <div className=" md:flex gap-5 items-center">
        <img className="w-48" src={logo} alt="Logo" />
        <div>
        <h4 className="font-bold text-xl">{jobTitle}</h4>
        <p className=" text-gray-400 font-semibold mb-4 mt-2">{companyName}</p>
        <button className="btn-outline text-gradient font-semibold mr-3">
          {jobType}
        </button>
        <button className="btn-outline text-gradient font-semibold">
          {duration}
        </button>
        <div className="flex gap-5 text-gray-500 my-4">
          <p className="flex gap-1">
            <MapPinIcon className="h-6 w-6 " />
            {location}
          </p>
          <p className="flex gap-1">
            <CurrencyDollarIcon className="h-6 w-6 " /> {salary}
          </p>
        </div>
        </div>
      </div>
      <Link to={`/job/${id}`} className="btn">
        View Details
      </Link>
    </div>
  );
};

export default SingleAppliedJob;

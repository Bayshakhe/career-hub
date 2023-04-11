import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { handleToApply } from "../utilities/handleToApply";

const JobDetails = () => {
  const jobDetails = useLoaderData();
//   console.log(jobDetails.contact)
  const { id, jobTitle, logo, salary, location, jobType, duration, companyName, contact, description, education, experiences, responsibility, } = jobDetails;

  return (
    <div style={{ maxWidth: "1400px" }} className="mx-auto lg:px-32">
      <h3 className="text-3xl font-bold my-10 text-center">Job Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div className="col-span-2">
          <p className="text-gray-700 mb-5">
            <span className="font-bold text-black">Job Description: </span>
            {description}
          </p>
          <p className="text-gray-700 mb-5">
            <span className="font-bold text-black">Job Responsibility: </span>{responsibility}
          </p>
          <div className="text-gray-700">
            <p className="font-bold text-black mb-3">Educational Requirment: </p>
            {education}
          </div>
          <div className="text-gray-700 mb-5">
            <p className="font-bold text-black my-3">Experiences: </p>
            {experiences}
          </div>
        </div>
        <div>
            <div className="bg-sky-50 p-5">
                <h5 className="font-bold text-md">Job Details</h5>
                <hr className="my-5 border"/>
                <p className="flex gap-2 text-gray-600 mb-3"> <CurrencyDollarIcon className="h-6 w-6 " /> <span className="font-bold">Salary:</span>{salary} (Per Month)
                </p>
                <p className="flex gap-2 text-gray-600"><CalendarDaysIcon className="h-6 w-6 " /> <span className="font-bold">Job Title:</span>{jobTitle}</p>
                <h5 className="font-bold text-md mt-7">Contact Information</h5>
                <hr className="my-5 border"/>
                <p className="flex gap-2 text-gray-600 mb-3"><PhoneIcon className="h-6 w-6 " /> <span className="font-bold">Phone: </span>{contact[0].phone}</p>
                <p className="flex gap-2 text-gray-600 mb-3"><EnvelopeIcon className="h-6 w-6 " /> <span className="font-bold">Email: </span>{contact[1].email}</p>
                <p className="flex gap-2 text-gray-600 "><MapPinIcon className="h-6 w-6 " /> <span className="font-bold">Address:</span>{location}</p>
            </div>
            <Link onClick={()=> handleToApply(id,companyName,jobType)} to='' className="btn w-full mt-3">Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

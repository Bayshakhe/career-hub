import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "../App";
import SingleAppliedJob from "./SingleAppliedJob";
import toast from "react-hot-toast";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

const AppliedJobs = () => {
  const appliedData = useContext(JobContext);
  const [data, setData] = useState([]);
  const [remoteOrOnsite, setRemoteOrOnsite] = useState(false);
  const [remote, setRemote] = useState([]);
  const [onsite, setOnsite] = useState([]);
  const [filterBy, setFilterBy] = useState(false);
  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("apply"));
    let matchedData = [];
    if (storedData) {
      for (const storedId of storedData) {
        const match = appliedData.find((a) => a.id == storedId.id);
        matchedData.push(match);
      }
    setData(matchedData);
    } else {
      toast.error("Not Applied Yet.");
    }
  }, []);

  const remoteJobHandler = () => {
    const storedData = JSON.parse(localStorage.getItem("apply"));
    let matchedData = [];
    if (storedData) {
        const match = storedData.filter((a) => a.jobType == 'Remote');
        // console.log(match)
      for (const job of match) {
        const findData = appliedData.find((a) => a.jobType == job.jobType && a.id == job.id);
        matchedData.push(findData)
      }
        setRemote(matchedData);
    }
    setRemoteOrOnsite(true);
    setFilterBy(true);
  };
  const onsiteJobHandler = () => {
    const storedData = JSON.parse(localStorage.getItem("apply"));
    let matchedData = [];
    if (storedData) {
      const match = storedData.filter(a => a.jobType == "Onsite");
      console.log(match)
        for (const job of match) {
          const findData = appliedData.find((a) => a.jobType == job.jobType && a.id == job.id);
          matchedData.push(findData);
        }
    }
    setOnsite(matchedData)
    setRemoteOrOnsite(false);
  };

  return (
    <div style={{ maxWidth: "1400px" }} className="mx-auto">
      <h3 className="text-3xl font-bold my-10 text-center">Applied Jobs</h3>
      <div className="flex justify-end md:mr-36 mb-5">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn-gray m-1 flex items-center">
            Filter by <ArrowDownIcon className="h-4 w-4 ml-2" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg w-52"
          >
            <li onClick={remoteJobHandler}>
              <a>Remote</a>
            </li>
            <li onClick={onsiteJobHandler}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      {!filterBy
        ? data?.map((singleData) => (
            <SingleAppliedJob
              key={singleData.id}
              singleData={singleData}
            ></SingleAppliedJob>
          ))
        : remoteOrOnsite
        ? remote?.map((singleData) => (
            <SingleAppliedJob
              key={singleData.id}
              singleData={singleData}
            ></SingleAppliedJob>
          ))
        : onsite?.map((singleData) => (
            <SingleAppliedJob
              key={singleData.id}
              singleData={singleData}
            ></SingleAppliedJob>
          ))}
    </div>
  );
};

export default AppliedJobs;

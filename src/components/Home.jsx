import React from "react";
import Banner from "./Banner";
import JobCategoryList from "./JobCategoryList";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <>
      <div className="bg-sky-50">
        <Banner></Banner>
      </div>
      <div style={{ maxWidth: "1400px" }} className="mx-auto">
        <JobCategoryList></JobCategoryList>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </>
  );
};

export default Home;

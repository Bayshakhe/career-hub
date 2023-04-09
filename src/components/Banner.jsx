import React from "react";

const Banner = () => {
  return (
    <div style={{maxWidth: '1400px'}} className="md:flex justify-between items-center mx-auto p-5">
      <div>
        <h2 className="text-4xl md:text-7xl font-bold leading-tight">
          One Step <br /> Closer To Your <br />
          <span className="text-gradient"> Dream Job</span>
        </h2>
        <p className="my-5 text-gray-600">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className="btn">Get Started</button>
      </div>
      <img className="h-full" src="../../hardy.png" alt="Banner image" />
    </div>
  );
};

export default Banner;

import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {
    const abc = useLoaderData()
    console.log(abc)
    return (
        <div className='text-center pb-28'>
            <h3 className='text-4xl font-bold mb-3'>Featured Jobs</h3>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <img className='w-48' src="https://thumbs.dreamstime.com/b/web-192037107.jpg" alt="" />
        </div>
    );
};

export default FeaturedJobs;
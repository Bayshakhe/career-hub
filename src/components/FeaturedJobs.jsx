import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { JobContext } from '../App';
import Job from './Job';

const FeaturedJobs = () => {
    const jobs = useContext(JobContext);
    const [seeAll, setSeeAll] = useState(false);
    
    // console.log(jobs)
    return (
        <div className='text-center pb-28'>
            <h3 className='text-4xl font-bold mb-3'>Featured Jobs</h3>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left px-10 md:px-28'>
                {
                    !seeAll ? jobs.slice(0,4).map(job => <Job key={job.id} job={job}></Job>) : jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            {
                !seeAll ? <button onClick={()=>setSeeAll(true)} className='btn mt-8'>SEE ALL JOBS</button> : ''
            }
        </div>
    );
};

export default FeaturedJobs;
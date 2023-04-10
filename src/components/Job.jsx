import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Link, useParams } from 'react-router-dom';

const Job = (props) => {
    const {id ,jobTitle, logo, salary, location, jobType, duration, companyName} = props.job;
    // const params = useParams()
    // console.log(jobTitle)
    return (
        <div className='border rounded-md px-5 pb-5'>
            <img className='h-24 w-48' src={logo} alt="Logo" />
            <h4 className='font-bold text-xl'>{jobTitle}</h4>
            <p className=' text-gray-400 font-semibold mb-4'>{companyName}</p>
            <button className='btn-outline text-gradient font-semibold mr-3'>{jobType}</button>
            <button className='btn-outline text-gradient font-semibold'>{duration}</button>
            <div className='flex gap-5 text-gray-500 my-4'>
                <p className='flex gap-1'><MapPinIcon className="h-6 w-6 " />{location}</p>  
                <p className='flex gap-1'><CurrencyDollarIcon className="h-6 w-6 " /> {salary}</p>
            </div>
            <Link to={`/job/${id}`} className='btn'>View Details</Link>
        </div>
    );
};

export default Job;
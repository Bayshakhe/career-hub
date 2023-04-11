import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../App';
import SingleAppliedJob from './SingleAppliedJob';
import toast from 'react-hot-toast';

const AppliedJobs = () => {
    const appliedData = useContext(JobContext);
    const [data, setData] = useState([])
    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('apply'))
        let matchedData = []
        if(storedData){
            for(const storedId of storedData){
                const match = appliedData.find(a => a.id == storedId.id);
                matchedData.push(match)
            }
            setData(matchedData)
        }
        else{
            toast.error("Not Applied Yet.")
        }
    },[])

    return (
        <div style={{maxWidth: '1400px'}} className='mx-auto'>
            <h3 className="text-3xl font-bold my-10 text-center">Applied Jobs</h3>
            {
                data?.map(singleData => <SingleAppliedJob key={singleData.id} singleData={singleData}></SingleAppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;
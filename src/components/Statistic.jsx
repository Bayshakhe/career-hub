import React from 'react';
import { ResponsiveContainer, ComposedChart, Line, Area, Bar,XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const Statistic = () => {
    const assignmentsMark = [
        { name: 'Assignment-1', mark: 57, outof: 60, },
        { name: 'Assignment-2', mark: 60, outof: 60 },
        { name: 'Assignment-3', mark: 60, outof: 60, },
        { name: 'Assignment-4', mark: 60, outof: 60 },
        { name: 'Assignment-5', mark: 50, outof: 60 },
        { name: 'Assignment-6', mark: 58, outof: 60 },
        { name: 'Assignment-7', mark: 60, outof: 60 }
      ];
    return (
        <div className='py-10 md:px-32 w-full h-[400px]' >
        <ResponsiveContainer>
          <ComposedChart width={500} height={500} data={assignmentsMark}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis dataKey="mark" />
            <Tooltip />
            <Legend />
            <Area dataKey="outof" fill="#f0f9ff" stroke="#ff7300" />
            <Bar dataKey="mark" barSize={20} fill="#87ceeb" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Statistic;
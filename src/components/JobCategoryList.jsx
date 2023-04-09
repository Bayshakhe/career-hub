import React from 'react';

const JobCategoryList = () => {
    const cards = [
        { id:1, icon: '../assets/Icons/accounts 1.png', category: 'Account & Finance', vacancy: '250 Jobs Available'},
        { id:2, icon: '../assets/Icons/business 1.png', category: 'Creative Design', vacancy: '100+ Jobs Available'},
        { id:3, icon: '../assets/Icons/social-media 1.png', category: 'Marketing & Sales', vacancy: '120 Jobs Available'},
        { id:4, icon: '../assets/Icons/chip 1.png', category: 'Engineering Job', vacancy: '179 Jobs Available'},
    ]
    return (
        <div className='text-center py-32'>
            <h3 className='text-4xl font-bold '>Job Category List</h3>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex gap-5 justify-evenly mt-8 mx-16'>
                {
                    cards.map(card => <li className='bg-sky-50 p-8 text-left rounded-lg' key={card.id}>
                        <img className='h-6' src={card.icon} alt="" />
                        <p className='font-bold text-lg'>{card.category}</p>
                        <p>{card.vacancy}</p>
                    </li>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;
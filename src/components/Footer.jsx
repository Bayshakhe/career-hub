import React from 'react';

const Footer = () => {
    return (
        <div style={{maxWidth: '1400px'}} className='mx-auto divide-y divide-gray-600 text-gray-300'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-5'>
            <div>
                <h3 className='font-bold text-2xl text-white'>glassdoor</h3>
                <p className='my-5'>
                There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                </p>
                <img src="../../group_icons.png" alt="" />
            </div>
            <ul>
                <li className='font-bold text-white'>Company</li>
                <li className='mt-3'>About us</li>
                <li className='mt-3'>Work</li>
                <li className='mt-3'>Latest News</li>
                <li className='mt-3'>Careers</li>
            </ul>
            <ul>
                <li className='font-bold text-white'>Product</li>
                <li className='mt-3'>Prototype</li>
                <li className='mt-3'>Plans & Pricing</li>
                <li className='mt-3'>Customers</li>
                <li className='mt-3'>Integrations</li>
            </ul>
            <ul>
                <li className='font-bold text-white'>Support</li>
                <li className='mt-3'>Help desk</li>
                <li className='mt-3'>Sales</li>
                <li className='mt-3'>Become a Partner</li>
                <li className='mt-3'>Developers</li>
            </ul>
            <ul>
                <li className='font-bold text-white'>Contact</li>
                <li className='mt-3'>524 Broadway , NYC</li>
                <li className='mt-3'>+1 777 - 978 - 5570</li>
            </ul>
        </div>
        
        <div className='flex justify-between px-5 py-10 text-sm'>
            <p>@2023 glassdoor. All Rights Reserved</p>
            <p>Powered by glassdoor</p>
        </div>
        </div>
    );
};

export default Footer;
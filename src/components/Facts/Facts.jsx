import React from 'react';

const Facts = () => {
    return (
        <div className='bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)] p-20 text-white text-center'>
            <h2 className='md:text-5xl text-3xl font-bold'>Trusted by Millions, Built for You</h2>
            <div className='flex justify-center gap-6 mt-10 flex-wrap'>
                <div className='text-center w-[342px]'>
                    <h6 className='text-md opacity-80'>Total Downloads</h6>
                    <h1 className='text-[64px] font-extrabold'>29.6M</h1>
                    <h6 className='text-md opacity-80'>21% more than last month</h6>
                </div>
                <div className='text-center w-[342px]'>
                    <h6 className='text-md opacity-80'>Total Reviews</h6>
                    <h1 className='text-[64px] font-extrabold'>906K</h1>
                    <h6 className='text-md opacity-80'>46% more than last month</h6>
                </div>
                <div className='text-center w-[342px]'>
                    <h6 className='text-md opacity-80'>Active Apps</h6>
                    <h1 className='text-[64px] font-extrabold'>132+</h1>
                    <h6 className='text-md opacity-80'>31 more will Launch</h6>
                </div>
            </div>
        </div>
    );
};

export default Facts;
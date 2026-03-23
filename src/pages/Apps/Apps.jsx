import React from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { Link } from 'react-router';

const Apps = ({data}) => {
    const homeApps = data.slice(0, 8);
    return (
        <div className='py-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-[#001931]'>Trending Apps</h2>
                <p className='text-xl text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-11/12 mx-auto mt-10'>
                {
                    homeApps.map(singleApp => <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link className='text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-semibold py-3 px-4 rounded-sm' to='/appList'>Show All</Link>
            </div>
        </div>
    );
};

export default Apps;
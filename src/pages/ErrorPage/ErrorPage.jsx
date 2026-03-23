import React from 'react';
import errorimg from '../../assets/errorpage.png';
import { Link } from 'react-router';
import Header from '../../components/Header/Header';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={errorimg} alt="" />
            <h2 className='text-5xl font-semibold text-[#001931] mb-2'>Oops, page not found!</h2>
            <p className='text-xl text-[#627382] mb-4'>The page you are looking for is not available.</p>
            <Link to='/' className='w-[150px] h-[48px] px-4 py-3 rounded-sm bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold text-center'>Go Back!</Link>
        </div>
    );
};

export default ErrorPage;
import React from 'react';
import Lottie from "lottie-react";
import errorMsg from "../../public/89922-404-page.json";
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error} = useRouteError();
    return (
        <>
            <h2 className='text-center text-3xl text-red-600 font-bold mt-10'>{error?.message}</h2>
            <Lottie className='h-96' animationData={errorMsg} loop={true}></Lottie>
        </>
    );
};

export default ErrorPage;
import React from 'react';
import Lottie from "lottie-react";
import errorMsg from "../../public/89922-404-page.json";

const ErrorPage = () => {
    return (
        <div>
            <Lottie className='h-96' animationData={errorMsg} loop={true}></Lottie>
        </div>
    );
};

export default ErrorPage;
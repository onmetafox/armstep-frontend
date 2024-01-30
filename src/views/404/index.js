import React from 'react';
import '../../styles/pages/404.scss';
import CommonBtn from 'src/components/button/CommonBtn';
import errorIcon from "../../assets/images/404/404.png";

const ErrorPage = () => {
    return <>
        <section className="error-page-section">
            <div className="error-page-content">
                <img src={errorIcon} alt='404' />
                <p className="error-message fs-s1">OOPS! This page is not available</p>
                <div className='back-to-home'>
                <CommonBtn title={"Back to home"} className={"color-white"} onClick={() => window.location.href = '/'} />
                </div>
            </div>
        </section>
    </>

}

export default ErrorPage;
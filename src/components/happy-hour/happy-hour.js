import React from 'react';
import './happy-hour.scss';

function HappyHour(props) {

    return (
        <section className="default-section happy-hour">
            <div className="container">
                <div className="content-wrapper">
                    <img className="logo" src="./img/logo1.png" alt=""/>
                    <h2 className="section-title">Happy hour is here</h2>
                    <h3 className="section-sub-title">Weekdays 6.00 pm to 9.00 pm</h3>
                </div>
            </div>
        </section>
    );
}

export default HappyHour;

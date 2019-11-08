import React from 'react';
import './home-carousel.scss';
import {Carousel} from 'antd';

function HomeCarousel(props) {

    return (
        <Carousel autoplay>
            <div>
                <img src="./img/cocktail-slide-1.jpg" alt=""/>
            </div>
            <div>
                <img src="./img/cocktail-slide-2.png" alt=""/>
            </div>
            <div>
                <img src="./img/cocktail-slide-3.jpg" alt=""/>
            </div>
            <div>
                <img src="./img/cocktail-slide-4.jpg" alt=""/>
            </div>
            <div>
                <img src="./img/cocktail-slide-5.jpg" alt=""/>
            </div>
            <div>
                <img src="./img/cocktail-slide-6.jpg" alt=""/>
            </div>
            <div>
                <img src="./img/cocktail-slide-7.jpg" alt=""/>
            </div>
        </Carousel>
    );
}

export default HomeCarousel;

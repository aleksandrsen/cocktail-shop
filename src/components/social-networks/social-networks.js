import React from 'react';
import './social-networks.scss';
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import pinterest from './img/pinterest.svg'
import youtube from './img/youtube.svg'
import instagram from './img/instagram.svg'

function SocialNetworks(props) {

    let {exclude} = props;

    let socialNetworks = [
        {
            name: 'facebook',
            link: 'https://facebook.com/',
            img: facebook
        },
        {
            name: 'twitter',
            link: 'https://twitter.com/',
            img: twitter
        },
        {
            name: 'pinterest',
            link: 'https://www.pinterest.com/',
            img: pinterest
        },
        {
            name: 'youtube',
            link: 'https://www.youtube.com',
            img: youtube
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/',
            img: instagram
        },
    ];

    return (
        <div className="social-networks">
            {
                socialNetworks.map(netWorkItem => {
                    let {name, link, img} = netWorkItem;
                    if (name === exclude) return '';
                    return (
                        <a key={name} href={link}>
                            <img src={img} alt={name}/>
                        </a>
                    )
                })
            }
        </div>
    );
}

export default SocialNetworks;
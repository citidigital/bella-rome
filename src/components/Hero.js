import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import RedHeartEmoji from '../assets/svgs/RedHeartEmoji';
import redHeartEmoji from '../assets/fluent-emoji_red-heart.svg';
import loading_bg from '../assets/loading_bg.svg';
import {ReactComponent as PageLoad} from '../assets/page_load.svg';
import {ReactComponent as PageLoadMobile} from '../assets/page_load_mobile.svg';
import './style.css';
import { animate, animateHeart } from '../utils.js/animate';
import CountUp from 'react-countup';
import $ from 'jquery';

const Hero = ({isMobile}) => {
    useEffect(() => {
        animate();
        console.log(isMobile)
    }, [isMobile]);

    return (
        <div className='hero'>
            <div className='logo-container'>
                <span id='logo-red-heart'><RedHeartEmoji /></span>
                <img src={logo} alt="logo" />
            </div>
            <div className='hero-text'>
                <p className='experience-text white-text'>
                    <span className='progress white-text italic-regular'><CountUp end={100} duration={3} />%</span>
                    <span className='line-1'>YOUR</span>
                    <br/>
                    <span className='line-2'>WEB EXPERIENCE {!isMobile && <span> IS</span>}</span><br/> 
                    <span className='line-3'>{isMobile && <span>IS </span>}LOADING RIGHT <span id='now' className='transparent-text'><span id='now-red-heart'><img src={redHeartEmoji} /></span><span className='now-text'>NOW</span></span></span>
                </p>

                <p className='wait-text white-text'>Please wait a few seconds.</p>
            </div>
            <div className='gradient-bg'>
                <img src={loading_bg} />
            </div>
            {isMobile ? <div className='page_load_mobile'>
                <PageLoadMobile />
            </div> : 
            <div className='page_load'>
            {/* <div style={{position: "absolute"}}><img src={Wink} style={{width:485, height:921,  x:"289px", y:"159px", translate:"289px 159px"}} /></div> */}
            
            <PageLoad />
        </div>}
        </div>
    );
}

export default Hero;
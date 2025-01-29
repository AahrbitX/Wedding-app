'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "tailwindcss/tailwind.css";
import { Gallery } from '../components/Gallery';
import Location from '../components/location';
import Reach from '../components/reach';
import {Landing } from '../components/Landing';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    return (
        <div className=" bg-pink-50 h-fit ">
            <Landing/>
            <Gallery/>
            <Location/>


            <div>
            <Reach/>

            </div>
        </div>
        
    );
};

export default Hero;

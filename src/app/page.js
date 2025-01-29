'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "tailwindcss/tailwind.css";
import { Gallery } from '../components/Gallery';
import Location from '../components/location';
import Reach from '../components/reach';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const layersRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        layersRef.current.forEach(layer => {
            const depth = layer.dataset.depth;
            const movement = -(layer.offsetHeight * depth);
            tl.to(layer, { y: movement, ease: "none" }, 0);
        });
    }, []);

    return (
        <div>
            <div id="hero" className="relative w-full h-[800px] overflow-hidden max-w-[1920px] mx-auto">
                {['0.10', '0.20', '0.40', '0.50', '0.65', '0.70', '0.80', '0.90','1.0'].map((depth, index) => (
                    <div
                        key={index}
                        ref={el => layersRef.current[index] = el}
                        data-depth={depth}
                        className={`absolute inset-0 bg-cover bg-center parallax layer-${index}`}
                        style={{ backgroundImage: `url(/images/layer-${index}.png)` }}
                    ></div>
                ))}

            </div>

            <div id="content" className="bg-[#130d0a] text-white py-10 px-5">
                <div className="container mx-auto">
                    <section className="first-section py-10">
                        <Gallery/>
                    </section>
                    <section className="first-section py-10">
                    <Location/>
                    </section>
                    <section className="first-section py-10">
                    <Reach/>
                    </section>


                </div>
            </div>
        </div>
    );
};

export default Hero;

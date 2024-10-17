

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
const createTimeline = (compRef: React.RefObject<HTMLDivElement>) => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#intro-Slider',
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
        },
    });
    timeline.from('#intro-Slider', { opacity: 0, x: -200, duration: 2, delay: 0.23 });
    timeline.from('#intro-Slider1', { opacity: 0, x: 200, duration: 2, delay: 0.23 });
    return timeline;
}

const Experience = () => {

    const compRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            createTimeline(compRef);
        }, compRef);
        return () => ctx.revert();
    }, []);
    return (
        <div ref={compRef} className="py-44 lg:px-64 md:px-28 bg-gray-900 min-h-screen" id='Work'>
            <h1 className="text-4xl text-white text-bold mb-10 text-center">Experience</h1>
            <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                <div className="col-span-4 w-full h-full">
                    <div id="intro-Slider" className="w-full h-full p-2 md:pl-4">
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2024 - Present</time>
                        <h3 className="text-lg font-semibold text-gray-200 my-2 dark:text-white">Senior Softare Engineer - Rhapsody</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Driving innovation and implementation of a new Rhapsody product that enables the deployment of Rhapsody integration engines at the edge.</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Rolled out a new internal microservice for API key generation using Golang, massively improving development and testing velocity across the team.</p>
                    </div>
                </div>
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-[1px] bg-[#1484da] "></div>
                    <div className="absolute w-3 h-3 rounded-full bg-[#ffffff] z-10 text-white text-center"></div>
                </div>
                <div className="col-span-4 w-full h-full"></div>
                <div className="col-span-4 w-full h-full"></div>
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-[1px] bg-[#1484da] "></div>
                    <div className="absolute w-3 h-3 rounded-full bg-[#ffffff] z-10 text-white text-center"></div>
                </div>
                <div id="intro-Slider1" className="col-span-4 w-full h-full ">
                    <div className="w-full h-full p-2 md:pl-4">
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022 - August 2024</time>
                        <h3 className="text-lg font-semibold text-gray-200 my-2 dark:text-white">Software Engineer - Rhapsody</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Designed, developed, tested and maintained an internal platform as a service (PaaS) offering that streamlined the configuration and rollout process for both customer and internal deployments</p>
                    </div>
                </div>
                <div id="intro-Slider" className="col-span-4 w-full h-full ">
                    <div className="w-full h-full p-2 md:pl-4">
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2021 - April 2022</time>
                        <h3 className="text-lg font-semibold text-gray-200 my-2 dark:text-white">Software Engineer - NextGate</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Focused on the backend engineering for a project related to self sovereign identity and decentralised ownership of medical records</p>
                    </div>
                </div>
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-[1px] bg-[#1484da] "></div>
                    <div className="absolute w-3 h-3 rounded-full bg-[#ffffff] z-10 text-white text-center"></div>
                </div>
                <div className="col-span-4 w-full h-full"></div>
            </div>
        </div>
    );
};

export default Experience;
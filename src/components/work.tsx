
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
const createTimeline = () => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#intro-Slider',
            start: 'top center',
            end: 'bottom center',
            scrub: 0.5, 
        },
    });

    // Mobile-specific adjustments
    gsap.matchMedia().add("(max-width: 768px)", () => {
        // Animations for mobile
        timeline.from('#intro-Slider', { opacity: 0, y: 50, duration: 1.2 }); // Animate along the y-axis for better performance
        timeline.from('#intro-Slider1', { opacity: 0, y: 50, duration: 1.2 });
    });

    // For larger screens
    gsap.matchMedia().add("(min-width: 769px)", () => {
        timeline.from('#intro-Slider', { opacity: 0, x: -200, duration: 2, delay: 0.23 });
        timeline.from('#intro-Slider1', { opacity: 0, x: 200, duration: 2, delay: 0.23 });
    });

    return timeline;
};

const Experience = () => {

    const compRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            createTimeline();
        }, compRef);
        return () => ctx.revert();
    }, []);
    return (
        <div ref={compRef} className="max-w-full py-20 lg:py-44 px-4 md:px-16 lg:px-64 min-h-screen" id='Work'>
            <h1 className="text-3xl lg:text-4xl text-white font-bold mb-10 text-center">Experience</h1>
            <div className="max-w-7xl mx-auto w-full grid grid-cols-9 gap-y-10 px-2">
                
                {/* Experience 1 */}
                <div className="col-span-9 lg:col-span-4 w-full h-full">
                    <div id="intro-Slider" className="w-full h-full p-2 md:pl-4">
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2024 - Present</time>
                        <h3 className="text-lg font-semibold text-gray-200 my-2 dark:text-white">Senior Software Engineer - Rhapsody</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Driving innovation and implementation of a new Rhapsody product that enables the deployment of Rhapsody integration engines at the edge.
                        </p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Rolled out a new internal microservice for API key generation using Golang, massively improving development and testing velocity across the team.
                        </p>
                    </div>
                </div>

                {/* Vertical line between experiences (hidden on mobile) */}
                <div className="relative hidden lg:flex col-span-0 lg:col-span-1 w-full h-full justify-center items-center">
                    <div className="h-full w-[1px] bg-[#1484da]"></div>
                    <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-white text-center"></div>
                </div>

                {/* Empty column for spacing (only on large screens) */}
                <div className="hidden lg:block col-span-0 lg:col-span-4 w-full h-full"></div>

                
                 {/* Empty column for spacing (only on large screens) */}
                 <div className="hidden lg:block col-span-0 lg:col-span-4 w-full h-full"></div>

                  {/* Vertical line between experiences (hidden on mobile) */}
                <div className="relative hidden lg:flex col-span-0 lg:col-span-1 w-full h-full justify-center items-center">
                    <div className="h-full w-[1px] bg-[#1484da]"></div>
                    <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-white text-center"></div>
                </div>

                {/* Experience 2 */}
                <div className="col-span-9 lg:col-span-4 w-full h-full">
                    <div id="intro-Slider1" className="w-full h-full p-2 md:pl-4">
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022 - August 2024</time>
                        <h3 className="text-lg font-semibold text-gray-200 my-2 dark:text-white">Software Engineer - Rhapsody</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Designed, developed, tested, and maintained an internal platform as a service (PaaS) offering that streamlined the configuration and rollout process for both customer and internal deployments.
                        </p>
                    </div>
                </div>

                { /* Experience 3*/}
                <div className="col-span-9 lg:col-span-4 w-full h-full">
                    <div id="intro-Slider" className="w-full h-full p-2 md:pl-4">
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2021 - April 2022</time>
                        <h3 className="text-lg font-semibold text-gray-200 my-2 dark:text-white">Software Engineer - NextGate</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Focused on backend engineering for a project related to self-sovereign identity and decentralized ownership of medical records.</p>
                    </div>
                </div>

                {/* Vertical line between experiences (hidden on mobile) */}
                <div className="relative hidden lg:flex col-span-0 lg:col-span-1 w-full h-full justify-center items-center">
                    <div className="h-full w-[1px] bg-[#1484da]"></div>
                    <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-white text-center"></div>
                </div>

                {/* Empty column for spacing (only on large screens) */}
                <div className="hidden lg:block col-span-0 lg:col-span-4 w-full h-full"></div>
            </div>
        </div>

    );
};

export default Experience;
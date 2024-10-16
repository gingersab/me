import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaStackOverflow } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const createTimeline = (compRef: React.RefObject<HTMLDivElement>) => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: compRef.current,  
            start: "top 80%",
            end: "bottom 20%",        
            toggleActions: "play reverse play reverse", // This can be a bit wonky if the DOM element re-enters the viewport before the animation is fully reversed
        },
    });
    timeline.from(".title", {
        opacity: 0,
        y: "+=30",
        stagger: 0.3,
        duration: 1,
    });

    return timeline;
};

export default function Home() {
    const compRef = useRef<HTMLDivElement>(null);  

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (compRef.current) {
                createTimeline(compRef); 
            }
        }, compRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={compRef} id="Home" className="min-h-screen flex flex-col justify-center items-center lg:w-[100%] text-white text-center">
            <h2 className="text-3xl my-2 title">Scott Wares</h2>
            <p className="title pt-5">Senior Software Engineer, code geek and general tech enthusiast</p>
            <p className="title pt-5">Add image here</p>
            <div className="flex gap-2 justify-center title">
                <button className="px-[20px] py-[5px] rounded mt-6 border border-[#1484da] transition-all duration-700 ease-in-out hover:bg-[#1484da] mb-10">
                    <a href="" download="Download">Download CV</a>
                </button>
            </div>
            <div className="flex gap-2 justify-center title">
                <a href="https://github.com/gingersab"><FiGithub className="bg-gray-900 p-[6px] text-3xl rounded" /></a>
                <a href="https://www.linkedin.com/in/scottbwares/"><FaLinkedinIn className="bg-gray-900 p-[6px] text-3xl rounded" /></a>
                <a href="https://stackoverflow.com/users/1836030/scott"><FaStackOverflow className="bg-gray-900 p-[6px] text-3xl rounded" /></a>
            </div>
        </div>
    );
}

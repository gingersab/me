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
        <div ref={compRef} id="Home" className=" max-w-full min-h-screen flex flex-col justify-center items-center w-full text-white text-center px-4 lg:px-0">
            <h2 className="text-3xl lg:text-5xl my-2 font-bold">Scott Wares</h2>
            <p className="text-lg lg:text-2xl pt-5">Senior Software Engineer, code geek, and general tech enthusiast</p>
            <p className="text-lg lg:text-2xl pt-5">Add image here</p>

            <div className="flex gap-4 justify-center mt-6">
                <button className="px-6 py-2 rounded border border-[#1484da] transition-all duration-700 ease-in-out hover:bg-[#1484da]">
                    <a href="" download="Download">Download CV</a>
                </button>
            </div>
            <div className="flex gap-4 justify-center mt-8">
                <a href="https://github.com/gingersab">
                    <FiGithub className="bg-gray-900 p-2 text-3xl lg:text-4xl rounded" />
                </a>
                <a href="https://www.linkedin.com/in/scottbwares/">
                    <FaLinkedinIn className="bg-gray-900 p-2 text-3xl lg:text-4xl rounded" />
                </a>
                <a href="https://stackoverflow.com/users/1836030/scott">
                    <FaStackOverflow className="bg-gray-900 p-2 text-3xl lg:text-4xl rounded" />
                </a>
            </div>
        </div>
    );
}

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Download from '../assets/react.svg'

gsap.registerPlugin(ScrollTrigger)

const createTimeline = () => {
    const timeline = gsap.timeline();
    timeline
        .from("#intro-Slider", {
            yPercent: "-100",
            duration: 0.5,
            delay: 0.25
        })
        .from(".title", {
            opacity: 0,
            y: "+=30",
            stagger: 0.5,
        });
    return timeline;
};

export default function Home() {
    const compRef = useRef(null)
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = createTimeline();
            return timeline;
        }, compRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={compRef} id='Home' className='min-h-screen flex flex-col justify-center items-center lg:w-[100%] text-white text-center'>
            <h2 className='text-3xl my-2 title'>Scott Wares</h2>
            <p className="title pt-5">Senior Software Engineer, code geek and general tech enthusiast</p>
            <p className="title pt-5"> Add image here </p>
            <div className="flex gap-2 justify-center title">
                <button className='px-[20px] py-[5px] rounded mt-6 border border-[#1484da] transition-all duration-700 ease-in-out hover:bg-[#1484da] mb-10'>
                    <a href="" download={Download}>Download CV</a>
                </button>
            </div>
            <div className='flex gap-2 justify-center title'>
                <a href="https://github.com/gingersab"><FiGithub  className='bg-gray-900 p-[6px] text-3xl rounded' /></a>
                <a href="https://www.linkedin.com/in/scottbwares/"><FaLinkedinIn className='bg-gray-900 p-[6px] text-3xl rounded' /></a>
                <a href="https://stackoverflow.com/users/1836030/scott"><FaStackOverflow className='bg-gray-900 p-[6px] text-3xl rounded' /></a>
            </div>
        </div>
    );
}
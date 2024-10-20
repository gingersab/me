import { FaJava, FaDocker, FaPython, FaAws } from 'react-icons/fa'
import { FaGolang } from "react-icons/fa6"
import { SiSpring, SiPostgresql, SiHibernate, SiKubernetes, SiIstio } from 'react-icons/si'

import img from '../assets/react.svg'

import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)
const createTimeline = (compRefRef: React.RefObject<HTMLDivElement>) => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: compRefRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: "play none none reset",
        },
    });
    timeline.from('#intro-Slider', {
        opacity: 0,
        x: -300,
        duration: 1.5,
    }).to('#intro-Slider', {
        opacity: 1,
        x: 0,
        duration: 1.7,
    });
    return timeline;
}

export default function About() {
    const compRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            createTimeline(compRef);
        }, compRef);
        return () => ctx.revert();
    }, []);


    return (
        <div ref={compRef} className=" max-w-full py-20 px-4 lg:px-44 text-white min-h-screen" id="About">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 lg:mb-28 text-center">About Me</h2>
            <div id="intro-Slider" className="flex flex-col lg:flex-row lg:items-start items-center justify-center gap-16 lg:gap-36">
                <img className="h-64 lg:h-72 w-full lg:w-[50%] mx-auto lg:mx-20 rounded-xl mb-6 lg:mb-9" src={img} alt="Profile" />
                <div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 mb-10 lg:mb-14">
                        <div className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center">
                            <FaJava className="text-2xl text-[#1484da]" />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center">
                            <SiSpring className="text-2xl text-[#1484da]" />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center">
                            <SiHibernate className="text-2xl text-[#1484da]" />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center">
                            <FaGolang className="text-2xl text-[#1484da]" />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center">
                            <FaPython className="text-2xl text-[#1484da]" />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center">
                            <SiPostgresql className="text-2xl text-[#1484da]" />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center">
                            <FaDocker className="text-2xl text-[#1484da]" />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center">
                            <SiKubernetes className="text-2xl text-[#1484da]" />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center">
                            <SiIstio className="text-2xl text-[#1484da]" />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center">
                            <FaAws className="text-2xl text-[#1484da]" />
                        </div>
                    </div>
                    <p className="text-base lg:text-[18px] lg:max-w-xl mb-4">
                        I'm Scott, a Senior Software Engineer in the healthcare industry, specializing in backend engineering. This portfolio is a frontend project to keep my skills up-to-date.
                    </p>
                    <p className="text-base lg:text-[18px] lg:max-w-xl mb-4">
                        My tech stack includes Java (Spring Boot, Hibernate), Python (machine learning and scripting), and Golang for microservice development.
                    </p>
                    <p className="text-base lg:text-[18px] lg:max-w-xl">
                        I have extensive experience with containerized deployments (Docker, Kubernetes), Helm, Istio/Gloo for service mesh, and other DevOps practices.
                    </p>
                </div>
            </div>
        </div>
    );
};
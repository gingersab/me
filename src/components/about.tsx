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
        <div ref={compRef} className="py-28 lg:px-44 text-white min-h-screen" id="About" >
            <h2 className='text-4xl text-bold mb-28 text-center'>About Me</h2>
            <div id="intro-Slider" className='flex lg:flex-row flex-col lg:items-start items-center justify-center gap-36'>
                <img className=' h-[16rem] w-[50%] lg:mx-20 rounded-xl mb-9' src={img} alt="" />
                <div>
                    <div className='flex lg:flex-row flex-col lg:justify-start justify-center gap-[20px] mb-[40px]'>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <FaJava className="text-[1.5rem] text-center text-[#1484da]  m-[5px]" />
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <SiSpring className="text-[1.5rem] text-center text-[#1484da]  m-[5px]" />
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <SiHibernate className="text-[1.5rem] text-center text-[#1484da]  m-[5px]" />
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <FaGolang className="text-[1.5rem] text-center text-[#1484da]  m-[5px]" />
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <FaPython className="text-[1.5rem] text-center text-[#1484da]  m-[5px]" />
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <SiPostgresql className="text-[1.5rem] text-center text-[#1484da]  m-[5px]" />
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <FaDocker className="text-[1.5rem] text-center text-[#1484da]  m-[5px]" />
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <SiKubernetes className="text-[1.5rem] text-center text-[#1484da]  m-[5px]" />
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <SiIstio className="text-[1.5rem] text-center text-[#1484da]  m-[5px]" />
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <FaAws className="text-[1.5rem] text-center text-[#1484da]  m-[5px]" />
                        </div>
                    </div>
                    <p className='lg:me-40 text-[18px]'>
                        I'm Scott, and I'm currently a Senior Software Engineer working in the healthcare industry. I mainly focus on backend engineering (UI/UX isn't really my thing), but I wanted to do a frontend side project to keep up-to-date, so I made this portfolio site.
                    </p>
                    <br />
                    <p className='lg:me-40 text-[18px]'>
                        My current tech stack is listed above. I primarily use Java with Spring Boot, Hibernate and Postgres. I work with Python for
                        machine learning tasks, creating container entrypoints and writing utility scripts. More recently I've found myself working with Golang for some internal microservice development.
                    </p>
                    <br />
                    <p className='lg:me-40 text-[18px]'>
                    I'm also well experienced in configuring and managing containerised deployments (Docker) to Kubernetes clusters, including using Helm.
                        At work our Kubernetes clusters also utilise Istio (well, actually Gloo now) as a service mesh, so I also have plenty of experience with configuring Istio/Gloo resources.
                    </p>
                </div>
            </div>
        </div>
    );
};
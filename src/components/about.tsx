import { LuBaggageClaim } from 'react-icons/lu'
import img from '../assets/react.svg'

import {  useLayoutEffect, useRef } from 'react'
import gsap from "gsap" 
import { ScrollTrigger } from 'gsap/all';
const About = () => {
    const comp = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
           
                const tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: '#intro-Slider',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1,
                  },
                });
            
                tl.from('#intro-Slider', { opacity: 0, x: -200, duration: 1 }); }, comp)
        
        return () => ctx.revert()

    }, [])
    return (
        <div ref={comp} className="py-28 lg:px-44 px-[20px] text-white" id="About" >
            <h2 className='text-4xl text-bold mb-28 text-center'>About Me</h2>
            <div id="intro-Slider" className='flex lg:flex-row flex-col lg:items-start items-center justify-center gap-36'>
                <img className=' h-[16rem] w-[50%] lg:mx-20 rounded-xl mb-9' src={img} alt="" />
                <div>
                <div className='flex lg:flex-row flex-col lg:justify-start justify-center gap-[20px] mb-[40px]'>
                    <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                        <LuBaggageClaim className="text-[20px] text-center text-[#1484da]  m-[6px]" />
                        <h2 id='title' className='text-[17px] font-bold'>Experts</h2>
                        <span className='py-[1px] text-[16px]'>Frontend Developer</span>
                        </div>
                    <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                        <LuBaggageClaim className="text-[20px] text-center text-[#1484da]  m-[6px]" />
                        <h2 className='text-[17px] font-bold'>Skills</h2>
                        <span className='py-[1px] text-[16px]'>Expert In UI/UX</span>
                    </div>
                    <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                        <LuBaggageClaim className="text-[20px] text-center text-[#1484da]  m-[6px]" />
                        <h2 className='text-[17px] font-bold'>Experts</h2>
                        <span className='py-[1px] text-[16px]'>Expert In UI/UX</span>
                    </div>
                </div>
                <p className='lg:me-40 text-[18px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, tenetur! Sapiente, mollitia officia. Rerum quasi inventore, reiciendis debitis ratione sint, cumque minus alias amet distinctio fugit.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
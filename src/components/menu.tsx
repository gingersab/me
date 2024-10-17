import { Link } from "react-scroll";
import { IoHomeOutline, IoPersonOutline, IoBriefcaseOutline } from "react-icons/io5";

export default function Menu() {
    return (
        <div className="flex justify-center flex-col items-center px-2">
            <div className="bg-gray-600 z-40 rounded-md m-[3px] flex gap-2
         bottom-10 py-2 px-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 fixed">
                <Link activeClass="bg-[#1484da] rounded-[50%]"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} ><IoHomeOutline className="text-[22px] text-center text-white lg:m-[10px] m-[3px]" /></Link>
                <Link activeClass="bg-[#1484da] rounded-[50%]"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} ><IoPersonOutline className="text-[22px] text-center text-white  lg:m-[10px] m-[3px]" /></Link>
                <Link activeClass="bg-[#1484da] rounded-[50%]"
                    to="Work"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} ><IoBriefcaseOutline className="text-[22px] text-center text-white  lg:m-[10px] m-[3px]" /></Link>
            </div>
        </div>
    );
};
import { Link } from "react-scroll";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Menu() {
    return (
        <div className="flex justify-center flex-col items-center px-2">
        <div className="bg-gray-600 z-40 rounded-md m-[3px] flex gap-2
         bottom-10 py-2 px-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 fixed">
            <Link activeClass="bg-[#1484da] rounded-[50%]"
                to="Home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} ><IoHomeOutline className="text-[22px] text-center text-white lg:m-[10px] m-[3px]" /></Link>
            <Link activeClass="bg-[#1484da] rounded-[50%]"
                to="About"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} ><IoPersonOutline className="text-[22px] text-center text-white  lg:m-[10px] m-[3px]"  /></Link>
            <Link activeClass="bg-[#1484da] rounded-[50%]"
                to="Experience"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} ><LuBaggageClaim className="text-[22px] text-center text-white  lg:m-[10px] m-[3px]"  /></Link>
            <Link activeClass="bg-[#187bc7] rounded-[50%]"
                to="Skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} ><HiOutlineLightBulb className="text-[22px] text-center text-white  lg:m-[10px] m-[3px]" /></Link>
        </div>
        </div>
    );
};
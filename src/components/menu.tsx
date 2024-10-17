import { Link } from "react-scroll";
import { IoHomeOutline, IoPersonOutline, IoBriefcaseOutline } from "react-icons/io5";

export default function Menu() {
    return (
        <div className="flex justify-center flex-col items-center px-2 mx-auto max-w-full">
            <div className="bg-gray-600 z-40 rounded-md m-[3px] flex gap-2
    bottom-10 py-2 px-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 fixed mx-auto">
                <Link activeClass="bg-[#1484da] rounded-full"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <IoHomeOutline className="text-[22px] text-white" />
                </Link>
                <Link activeClass="bg-[#1484da] rounded-full"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <IoPersonOutline className="text-[22px] text-white" />
                </Link>
                <Link activeClass="bg-[#1484da] rounded-full"
                    to="Work"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <IoBriefcaseOutline className="text-[22px] text-white" />
                </Link>
            </div>
        </div>
    );
};

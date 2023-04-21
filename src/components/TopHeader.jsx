import moment from "moment";
import logo from "/logo.png"
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";

const TopHeader = () => {
    return (
        <header className="mt-[30px]">
            <img src={logo} className="h-[40px] mx-auto" alt="logo" />
            <p className="text-center mt-4">Journalism Without Fear or Favour</p>
            <p className="font-bold text-center mt-[10px]">{moment().format("dddd, MMMM D, YYYY")}</p>
            <div className="bg-[#F3F3F3] p-2 mt-6 flex items-center">
                <button className="px-4 py-2 text-white rounded bg-[#D72050]">Latest</button>
                <Marquee>
                    <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
            <Navbar/>
        </header>
    );
};

export default TopHeader;
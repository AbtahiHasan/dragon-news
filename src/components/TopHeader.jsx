import moment from "moment";
import logo from "/logo.png"

const TopHeader = () => {
    return (
        <header className="mt-[30px]">
            <img src={logo} className="h-[40px] mx-auto" alt="logo" />
            <p className="text-center mt-4">Journalism Without Fear or Favour</p>
            <p className="font-bold text-center mt-[10px]">{moment().format("dddd, MMMM D, YYYY")}</p>
        </header>
    );
};

export default TopHeader;
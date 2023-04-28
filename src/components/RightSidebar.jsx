import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import qzone1 from "/assets/qZone1.png"
import qzone2 from "/assets/qZone2.png"
import qzone3 from "/assets/qZone3.png"
import bg from "/assets/bg.png"
import { Link } from "react-router-dom";

const RightSidebar = () => {
    return (
        <div>
            <h3 className="font-bold text-lg">Login With</h3>

            <div className="flex items-center justify-center border p-2 rounded gap-2 mt-4">
                <FcGoogle/>
                <p>Login with Google</p>
            </div>
            <div className="flex items-center justify-center border p-2 rounded gap-2 mt-2">
                <AiFillGithub/>
                <p>Login with Github</p>
            </div>

            <h3 className="font-bold text-lg mt-8">Find Us On</h3>
            
            {/* table  */}
            <table className="rounded  border-[1px] w-full border-slate-200 mt-8">
                <tr >
                    <td className="flex items-center gap-2 p-2 border-[1px] border-slate-200"><FaFacebook/> <p>Facebook</p></td>
                </tr>
                <tr>
                    <td className="flex items-center gap-2 p-2 border-[1px] border-slate-200"><AiFillTwitterCircle/><p>Twitter</p></td>
                </tr>
                <tr>
                    <td className="flex items-center gap-2 p-2 border-[1px] border-slate-200"><AiFillInstagram/><p>Instagram</p></td>
                </tr>
            </table>
            {/* Q-Zone */}

            <div className="bg-[#F3F3F3] mt-8 p-[15px]">
                <h3 className="font-bold text-lg">Q-Zone</h3>
                <img className="mt-[20px] w-full" src={qzone1} alt="" />
                <img className="w-full" src={qzone2} alt="" />
                <img className="w-full" src={qzone3} alt="" />
            </div>

            <div className="w-full h-[50vh] mt-8 relative">
                <img className="w-full h-full" src={bg} alt="" />
                <div className="absolute top-0 flex justify-center items-center flex-col h-full p-5 text-white text-center">
                    <h2 className="text-[30px] font-bold">Create an Amazing Newspaper</h2>
                    <p className="my-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Link to="/" className="px-4 py-2 text-white rounded bg-[#D72050]">Learn More</Link>
                </div>
            </div>

        </div>
    );
};

export default RightSidebar;
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import qzone1 from "/assets/qZone1.png"
import qzone2 from "/assets/qZone2.png"
import qzone3 from "/assets/qZone3.png"

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
                <img className="mt-[20px]" src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>



        </div>
    );
};

export default RightSidebar;
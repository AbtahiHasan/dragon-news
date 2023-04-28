import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className='flex justify-center gap-3 items-center my-5'>
            <ul className='flex gap-3  mx-auto'>
                <li>
                    <Link to="/categories/0">Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Career</Link>
                </li>
            </ul>
            <div className='flex items-center gap-3'>
                <FaUserCircle className='text-2xl'/>
                <button className='px-4 py-2 text-white rounded bg-[#403F3F]'><Link>Login</Link></button>
            </div>
        </nav>
    );
};

export default Navbar;
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from '../context/AuthProvider';


const Navbar = () => {
    const {user, logOut} = useAuth()
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
                {
                    !user ? <button className='px-4 py-2 text-white rounded bg-[#403F3F]'><Link to="/login">Login</Link></button> :
                    <button onClick={logOut} className='px-4 py-2 text-white rounded bg-[#403F3F]'>LogOut</button>
                }
                
            </div>
        </nav>
    );
};

export default Navbar;
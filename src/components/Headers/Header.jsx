import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    const links = <>
        <li><NavLink to="/"
                className={({ isActive }) => {
                    return isActive ? "text-blue-500 border-2 border-green-500 hover:bg-green-300" : "text-black";
                }}>Home</NavLink></li>
            <li><NavLink to="/listedBooks"
                className={({ isActive }) => {
                    return isActive ? "text-blue-500 border-2 border-green-500 hover:bg-green-300" : "text-black";
                }}>Listed Books</NavLink></li>
            <li><NavLink to="/pageToRead"
                className={({ isActive }) => {
                    return isActive ? "text-blue-500 border-2 border-green-500 hover:bg-green-300" : "text-black";
                }}>Pages to Read</NavLink></li>
            <li><NavLink to="/coming"
                className={({ isActive }) => {
                    return isActive ? "text-blue-500 border-2 border-green-500 hover:bg-green-300" : "text-black";
                }}>Coming Soon</NavLink></li>
            <li><NavLink to="/question"
                className={({ isActive }) => {
                    return isActive ? "text-blue-500 border-2 border-green-500 hover:bg-green-300" : "text-black";
                }}>Any question?</NavLink></li>
    </>
    return (
        <div className="font-class">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-1 lg:space-x-4">
                    <a className="btn bg-green-400  text-white px-2 lg:px-6">Sign In</a>
                    <a className="btn bg-blue-400  text-white px-2 lg:px-6">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
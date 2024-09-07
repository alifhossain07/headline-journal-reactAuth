import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../public/assets/images/user.png";
import LoginPage from "../LoginPage/LoginPage";


const Navbar = () => {

    const navLinks = <>

        <li className="text-xl font-bold"><NavLink to="/" >Home</NavLink></li>
        <li className="text-xl font-bold"><NavLink to="/about" >About</NavLink></li>
        <li className="text-xl font-bold"><NavLink to="/career" >Career</NavLink></li>
        
    </>


    return (
        <div className="mt-5 mb-5">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLinks}
      </ul>
    </div>
    
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>


        <div className="navbar-end gap-5">

            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-14 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src={userDefaultPic} />
                </div>
            </div>
            <Link to="/login">
                <button className="btn btn-secondary px-10">Login</button>
            </Link>
            
        </div>
</div>
        </div>
    );
};

export default Navbar;
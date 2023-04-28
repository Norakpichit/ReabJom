import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar h-16 bg-dark text-white text-xl font-extralight fixed z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-light rounded-box w-52 text-[#548BBE]"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Details</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <Link to="/Booking">Your Booking</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" className=" h-12" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex px-1 gap-5 ">
          <li className=" rounded-xl hover:translate-y-1 transition-all active">
            <Link to="/">Home</Link>
          </li>
          <li className=" rounded-xl hover:translate-y-1 transition-all">
            <a>Rating</a>
          </li>
          <li className=" rounded-xl hover:translate-y-1 transition-all">
            <a>Details</a>
          </li>
          <li className=" rounded-xl hover:translate-y-1 transition-all">
            <a>About us</a>
          </li>
          <li className=" rounded-xl hover:translate-y-1 transition-all">
            <Link to="/Booking">Your Booking</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3 flex justify-end items-center">
        <a className="btn btn-sm bg-transparent border-none hover:bg-transparent hover:translate-y-1">
          Log In
        </a>
        <a className="btn bg-light border-none hover:bg-light hover:translate-y-1 transition-all btn-sm text-[#548BBE] ">
          Sign Up
        </a>
      </div>
    </div>
  );
}

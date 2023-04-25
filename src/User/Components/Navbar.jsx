import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  return (
    <div className="navbar h-16 border-2 border-b-slate-900">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
        <ul className="menu menu-horizontal px-1">
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
      <div className="navbar-end">
        <Link to="/Login">
          <a className="btn">Login</a>
        </Link>
      </div>
    </div>
  );
}

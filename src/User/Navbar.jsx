import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <div className="navbar h-16 border-2 border-b-slate-900">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" className=" h-12" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
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
            <a>Your Booking</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
}

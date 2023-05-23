import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer p-20 bg-dark text-white grid grid-cols-3 max-md:grid-cols-2 text-xl">
      <div className="flex flex-col gap-5">
        <span className="footer-title">User</span>
        <a className="link link-hover font-thin">Report a problem</a>
        <a className="link link-hover font-thin">RATE US!</a>
        <a className="btn bg-light border-none hover:bg-light hover:translate-y-1 transition-all text-[#548BBE] ">
          Start Booking
        </a>
      </div>
      <div className="flex flex-col gap-5">
        <span className="footer-title">Service Provider</span>
        <a className="link link-hover font-thin">About Us</a>
        <a className="link link-hover font-thin">Details</a>
        <Link to="/Request" className="nav-link">
          Become a Seller
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <span className="footer-title">Follow Us</span>
        <a className="link link-hover flex font-thin gap-3">
          <FaFacebook className="w-8 h-8" /> Facebook
        </a>
        <a className="link link-hover flex font-thin gap-3">
          <FaTwitter className="w-8 h-8" /> Twitter
        </a>
        <a className="link link-hover flex font-thin gap-3">
          <FaInstagram className="w-8 h-8" /> Instagram
        </a>
        <a className="link link-hover flex font-thin gap-3">
          <FaTiktok className="w-8 h-8" /> Tiktok
        </a>
      </div>
    </footer>
  );
}

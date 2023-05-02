import React, { useState, useEffect } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { BiDollarCircle, BiLogIn } from "react-icons/bi";
import { RiSettings4Line } from "react-icons/ri";
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";
import PAFA from "../assets/pafa.jpg";
import Logo from "../assets/logo.png";
import Navbar from "./Navbar";


const Sidebar = (props) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const menus = [
    {
      name: "Dashboard",
      link: "/",
      icon: AiOutlineHome,
    },
    {
      name: "Messages",
      link: "/Messages",
      icon: TbMessageCircle,
    },
    {
      name: "MailBox",
      link: "/MailBox",
      icon: GoMail,
    },
    {
      name: "Booking Schedule",
      link: "/Booking/Schedule",
      icon: FiCalendar,
    },
    {
      name: "Sell History",
      link: "/Sell/History",
      icon: BiDollarCircle,
    },
    {
      name: "Setting",
      link: "/Setting",
      icon: RiSettings4Line,
    },
    {
      name: "Log out",
      link: "/Log/out",
      icon: BiLogIn,
    },
  ];

  const setconnect = props.connect;
  const [open, setOpen] = useState(true);

  return (
    <div >
      {/* Bigscreen */}
      {matches && (
        <div>
        <Navbar />
        <section className="flex gap-6 bg-white">
  
          <div
            className={`bg-[#DDE7FC] min-h-screen ${
              open ? "w-60 " : "w-16"
            } duration-500 text-gray-100 px-4`}
          >
            <div>
              <div className={"pt-2 flex justify-between"}>
                <div
                  className={`whitespace-pre duration-500 flex item-center${
                    !open && "hidden"
                    
                  }`}
                >
                </div>            
           
                <HiMenuAlt3
                  size={26}
                  className="cursor-pointer text-black"
                  onClick={() => setOpen(!open)}
                />
              </div>
            </div>
  
            <div className="mt-2 flex flex-col gap-4 relative text-black">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${
                    menu?.margin && "mt-5"
                  } group flex items-center text-l gap-3.5 font-medium p-2 hover:bg-[#92B7FF] rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <a
                    style={{
                      transitionDelay: `${i}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open &&
                      "opacity-0 translate-x-28 overflow-hidden text-[#92B7FF]"
                    }`}
                  >
                    {menu?.name}
                  </a>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
          <div>{setconnect}</div>
        </section>
      </div>
      )}
      {/* small screen */}
      {!matches && (
        <div> 
        <Navbar />
        <section className="flex gap-6 bg-white item-center">
  
          <div className={'bg-[#DDE7FC] min-h-screen w-13 duration-500 text-gray-100'}>
            <div className="mt-2 flex flex-col gap-4 relative text-black">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${
                    menu?.margin && "mt-3"
                  } group flex items-center text-l font-medium p-3 pt-5 hover:bg-[#92B7FF] rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    className={'absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  '}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
          <div>{setconnect}</div>
        </section>
      </div>
      )}
    </div>
  );
}

export default Sidebar;
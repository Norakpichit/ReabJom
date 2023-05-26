import { BiDollarCircle, BiLogIn } from "react-icons/bi";
import { useState,useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import React from "react";


const Dashboard = () => {
  const [openTotalBook, setOpenTotalBook] = useState(false);
  const [openRevenue, setOpenRevenue] = useState(false);
  const [SelectedMonthTotalBook, setSelectedMonthTotalBook] = useState("Total Booking");
  const [SelectedMonthRevenue, setSelectedMonthRevenue] = useState("Revenue");
  const handleOpenTotalBook = () => {
    setOpenRevenue(false);
    setOpenTotalBook(!openTotalBook);

  };
  const handleOpenRevenue = () => {
    setOpenTotalBook(false);
    setOpenRevenue(!openRevenue);
  };


  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  

  const months = [
    {
      name: "January",
      link: "/",
    },
    {
      name: "February",
      link: "/",
    },
    {
      name: "March",
      link: "/",
    },
    {
      name: "April",
      link: "/",
    },
    {
      name: "May",
      link: "/",
    },
    {
      name: "June",
      link: "/",
    },
    {
      name: "July",
      link: "/",
    },
    {
      name: "August",
      link: "/",
    },
    {
      name: "September",
      link: "/",
    },
    {
      name: "October",
      link: "/",
    },
    {
      name: "November",
      link: "/",
    },
    {
      name: "December",
      link: "/",
    },
  ];

  return (
    <div className="w-full">
      {/* Bigscreen */}
      {matches && (
        <div>
        <div className="xl:flex lg:flex md:flex flex-wrap">
          {/* Total Booking */}
          <div className="m-4 relative h-50 w-100 shadow-lg flex items-center rounded-lg border border-black">
            <div>
              <div className="relative flex mt-4 ">
                <div className="pr-5 pt-0.5 pl-3">Total Booking</div>
                <button onClick={handleOpenTotalBook} className="pt-0.5 pr-2 h-10 flex">
                  <div>{SelectedMonthTotalBook}</div>
                  <RiArrowDropDownLine
                    style={{ color: "green", fontSize: "25px" }}
                  />
                </button>
                {openTotalBook ? (
                  <div className="w-[130px] ml-[110px] mt-10 absolute bg-gray-500 text-center z-50">
                    {months?.map((month, i) => (
                      <Link to={month?.link} key={i}>
                        <a
                          className={"text-white flex p-1"}
                          onClick={() => {
                            setSelectedMonthTotalBook(month?.name);
                            setOpenTotalBook(!openTotalBook);
                          }}
                        >
                          {month?.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              <hr className="border-black w-full flex" />
              <div className="flex">
                <div className="pl-4 pr-4">
                  <BiDollarCircle style={{ color: "green", fontSize: "60px" }} />
                </div>
                <h1 className="pl-8 pr-4 pt-4">0</h1>
              </div>
            </div>
          </div>
  
          {/* Revenue */}
          <div className="m-4 relative h-50 w-100 shadow-lg flex items-center rounded-lg border border-black">
            <div>
              <div className="relative flex mt-4 ">
                <div className="pr-5 pt-0.5 pl-3">Revenue</div>
                <button onClick={handleOpenRevenue} className="pt-0.5 pr-2 h-10 flex">
                  <div >{SelectedMonthRevenue}</div>
                  <RiArrowDropDownLine
                    style={{ color: "green", fontSize: "25px" }}
                  />
                </button>
                {openRevenue ? (
                  <div className="w-[130px] ml-[110px] mt-10 absolute bg-gray-500 text-center z-50">
                    {months?.map((month, i) => (
                      <Link to={month?.link} key={i}>
                        <a
                          className={"text-white flex p-1"}
                          onClick={() => {
                            setSelectedMonthRevenue(month?.name);
                            setOpenRevenue(!openRevenue);
                          }}
                        >
                          {month?.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              <hr className="border-black w-full flex" />
              <div className="flex">
                <div className="pl-4 pr-4">
                  <BiDollarCircle style={{ color: "green", fontSize: "60px" }} />
                </div>
                <h1 className="pl-8 pr-4 pt-4">0</h1>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      )}
      {/* small screen */}
      {!matches && (
        <div>
        <div className="xl:flex lg:flex md:flex flex-wrap">
          {/* Total Booking */}
          <div className="m-4 relative h-50 w-100 shadow-lg flex items-center rounded-lg border border-black">
            <div>
              <div className="relative flex mt-4 ">
                <div className="pr-5 pt-0.5 pl-3">Total Booking</div>
                <button onClick={handleOpenTotalBook} className="pt-0.5 pr-2 h-10 flex">
                  <div className="pt-0.5">{SelectedMonthTotalBook}</div>
                  <RiArrowDropDownLine
                    style={{ color: "green", fontSize: "25px" }}
                  />
                </button>
                {openTotalBook ? (
                  <div className="w-[130px] ml-[110px] mt-10 absolute bg-gray-500 text-center z-50">
                    {months?.map((month, i) => (
                      <Link to={month?.link} key={i}>
                        <a
                          className={"text-white flex p-1"}
                          onClick={() => {
                            setSelectedMonthTotalBook(month?.name);
                            setOpenTotalBook(!openTotalBook);
                          }}
                        >
                          {month?.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              <hr className="border-black w-full flex" />
              <div className="flex">
                <div className="pl-4 pr-4">
                  <BiDollarCircle style={{ color: "green", fontSize: "60px" }} />
                </div>
                <h1 className="pl-8 pr-4 pt-4">0</h1>
              </div>
            </div>
          </div>
        {/* Revenue */}
          <div className="m-4 h-50 flex absolute w-100 shadow-lg rounded-lg border border-black">
            <div>
              <div className="relative flex mt-4 ">
                <div className="pr-5 pl-5">Revenue</div>
                  <button onClick={handleOpenRevenue} className="h-10 flex">
                  <div className="right-20">{SelectedMonthRevenue}</div>
                    <RiArrowDropDownLine
                      style={{ color: "green", fontSize: "25px" , bottom: "13px"}}
                    />
  
                  </button>
                {openRevenue ? (
                  <div className="w-[130px] ml-[110px] mt-10 absolute bg-gray-500 text-center z-50">
                    {months?.map((month, i) => (
                      <Link to={month?.link} key={i}>
                        <a
                          className={"text-white flex p-1"}
                          onClick={() => {
                            setSelectedMonthRevenue(month?.name);
                            setOpenRevenue(!openRevenue);
                          }}
                        >
                          {month?.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              <hr className="border-black w-full" />
              <div className="flex">
                <div className="pl-4 pr-4">
                  <BiDollarCircle style={{ color: "green", fontSize: "60px" }} />
                </div>
                <h1 className="pl-8 pr-4 pt-4">0</h1>
              </div>
            </div>
          </div> 
        </div>
      </div>
      )}
    </div>
  );
};

export default Dashboard;

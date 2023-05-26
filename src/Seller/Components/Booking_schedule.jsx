
import {useState} from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import React from 'react';



const Booking_schedule = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
    const months = [
        {
            name : "January" ,
            link : "/"
        },
        {
            name: "February",
            link : "/"
        }

    ];
  
    return ( 
        <div className="w-full">
        <div className="relative shadow bg-green-200 flex m-3 ">
            <div className='p-3'>Dropdown</div> 
            <button onClick={handleOpen} className='p-3 h-14 flex'>
                    <RiArrowDropDownLine style={{color: 'green', fontSize: '25px'}}/>
            </button>
            {open ? (
            <div className='w-23 ml-16 mt-14 absolute bg-gray-500'>           
                {months?.map((month, i) => (
                    <Link
                    to={month?.link}
                    key={i}
                    >
                    <a className={"text-white flex items-center"}>
                        {month?.name}
                    </a>
                    </Link>
                ))}
            </div>
            ) : null}
        </div>
    </div>
     );
}
 
export default Booking_schedule; 
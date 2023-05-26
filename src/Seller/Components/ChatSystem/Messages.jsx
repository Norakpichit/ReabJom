import React , { useState,useEffect } from "react";
import { Chat } from "./Chat";
import pafa from "./pafa.jpg"

const Messages = (props) => {
    return ( 

    <div className="w-full flex">
        <div className=" w-1/4">
            <div className="h-full bg-gray-300 justify-items-center">
                <div className='flex items-center pt-20 pl-10'> 
                    <a href="/">
                    <img src={pafa} alt="Profile" className='rounded-full object-cover w-10 h-10 lg:w-14 lg:h-14 ' />
                    </a>    
                   
                    <h1 className='font-semibold text-md lg:text-lg text-black ml-7'>{props.with}</h1>               
                 </div>
            </div>
        </div>
        <div className="w-3/4">
            <div className="h-20 bg-gray-300">
            
            </div>
              
            <Chat user = {props.user} with = {props.with}/>
            {/* <ChatSidebar user = {props.user} with = {props.with}/> */}

        </div>
    </div>
     );
}
 
export default Messages; 
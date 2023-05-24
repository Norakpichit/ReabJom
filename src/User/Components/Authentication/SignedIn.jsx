import React from "react";
import { Navigate} from 'react-router-dom';

function SignedIn(){
    const logout =()=>{
        localStorage.clear();
        // window.location.reload();
        window.location.replace('/Signup');
    }
    return (
        <div className="m-auto mt-6 mb-6 !z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-blue-200 bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined">
            <h1 className="bg-white drop-shadow-md rounded px-8 pt-6 pb-8 mb-4">
                Signed In Using Google Account!
            </h1>

            <button className="drop-shadow-md bg-blue-500 w-full flex gap-1 justify-center hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline" 
                onClick={logout}>Logout
            </button>
        </div>
    );
}
export default SignedIn;
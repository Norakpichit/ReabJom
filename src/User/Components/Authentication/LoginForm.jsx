import React, { useState } from 'react';
import withus_black from "../../../assets/withus_black.png";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle login logic here
    }

    return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className='m-auto !z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-blue-200 bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined'>    
            <img src={withus_black} alt="" className=" h-12 m-auto" /> 
            <label className='text-center block mb-3 mt-1'> Log into Account </label>
            
            <div className="mb-3">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="username"> Username </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email or Phone Number"
                value={username}
                onChange={handleUsernameChange}
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password"> Password </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                />
            </div>

            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\"
                type="submit"
                >
                    Log in
                </button>

                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </div>
    </form>
    );
}


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
    <form onSubmit={handleSubmit} className="bg-white drop-shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className='m-auto !z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-blue-200 bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined'>    
            <img src={withus_black} alt="" className=" h-12 m-auto" /> 
            <label className='text-center block mb-3 mt-1'> Login to an Account </label>
            
            <div className="mb-3">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="username"> Username </label>
                <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="អ៊ីមែល ឬ លេខទូរស័ព្ទ"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$|[0]{1}[1-9]{1}[0-9]{7}|[0]{1}[1-9]{1}[0-9]{8}"
                value={username}
                onChange={handleUsernameChange}
                required
                />
            </div>

            <div className="mb-5">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password"> Password </label>
                <input
                className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="ពាក្យសម្ងាត់"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                value={password}
                onChange={handlePasswordChange}
                required
                />
            </div>

            {/* <div className="flex items-center justify-between"> */}
                <button className="drop-shadow-md bg-blue-500 w-full flex gap-1 justify-center hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                    <span> Log In </span>
                </button>

                <button className="mt-3 inline-block align-center font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    <span> Forgot Password? </span>
                </button>
            {/* </div> */}
        </div>
    </form>
    );
}


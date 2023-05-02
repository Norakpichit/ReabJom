import React, { useState, useEffect } from 'react';
import withus_black from "../../../assets/withus_black.png";
import { Link } from 'react-router-dom';

export default function Signup1stForm(){
    const [switchSignup, setSwitchSignup] = useState(false);
    const [username, setUsername] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    // const [resetUsername, setResetUsername] = useState(false);
    
    useEffect(() => {
        console.log(username);
    }, [switchSignup]);

    const handlePhoneChange = (event) => {
        setUsername(event.target.value);
        validatePhoneForm();
    };
    
    const handleEmailChange = (event) => {
        setUsername(event.target.value);
        validateEmailForm();
    };

    const validatePhoneForm = () => {
        const usernamePattern = /^([0]{1}[1-9]{1}[0-9]{6})|([0]{1}[1-9]{1}[0-9]{7})$/;
        if (username && usernamePattern.test(username)) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };
    
    const validateEmailForm = () => {
        const usernamePattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$$/;
        if (username && usernamePattern.test(username)) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };
      
    const handleClick = () => {
        setSwitchSignup(!switchSignup);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className='m-auto !z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-blue-200 bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined'>    
                <img src={withus_black} alt="" className=" h-12 m-auto" /> 
                <label className='text-center block mb-3 mt-1'> Create an Account </label>
                
                <div>
                    {!switchSignup &&
                        <div className="mb-3">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="username"> Phone Number </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            value={username}
                            type="tel"
                            placeholder="លេខទូរសព្ទ"
                            pattern="[0]{1}[1-9]{1}[0-9]{7}|[0]{1}[1-9]{1}[0-9]{8}" 
                            onChange={handlePhoneChange}
                            />
                        </div>}  

                    {switchSignup &&
                        <div className="mb-3">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="username"> Email </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            value={username}
                            type="email"
                            placeholder="អ៊ីមែល"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                            onChange={handleEmailChange}
                            />
                        </div>}
                </div>

                <div className="flex items-center justify-between">
                    <Link to="/Signup/Info">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" disabled={!isFormValid}>
                            Sign up
                        </button>
                    </Link>

                    <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"
                    onClick={handleClick}>
                        Try Another Way?
                    </button>
                </div>
            </div>
        </form>
    );
}
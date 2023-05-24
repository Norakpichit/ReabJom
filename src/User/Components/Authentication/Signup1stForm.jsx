import React, { useState, useEffect } from 'react';
import withus_black from "../../../assets/withus_black.png";
import { Navigate} from 'react-router-dom';
import {BsTelephoneFill,BsFillShieldLockFill} from "react-icons/bs";
import {CgSpinner} from "react-icons/cg";
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";
import OTPInput from "otp-input-react";
import { auth } from '../../../Firebase/firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-hot-toast";

export default function Signup1stForm(){
    const [switchSignup, setSwitchSignup] = useState(false);
    const [username, setUsername] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [ph, setPh] = useState("");
    const [otp,setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user,setUser] = useState(null);
    
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
      
    const handleClick = () => {
        setSwitchSignup(!switchSignup);
    };

    function onCaptchaVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                'recaptcha-container',
                {
                'size': "invisible",
                'callback': (response) => {
                    onSignup();
                },
                'expired-callback': () => {},
                },auth
            );
        }
    }
    
    function onSignup() {
        setLoading(true);
        onCaptchaVerify();
    
        const appVerifier = window.recaptchaVerifier;
        const formatPh = "+" + ph;
    
        signInWithPhoneNumber(auth, formatPh, appVerifier)

        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setLoading(false);
            setShowOTP(true);
            toast.success("OTP sended successfully!");
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }
    
    function onOTPVerify() {
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res);
                setUser(res.user);
                setLoading(false);
        })
        .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }
        
    return (
        <section className="bg-white drop-shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
                <div id='recaptcha-container'></div>
                {user ? 
                    (
                        <Navigate to={"/Signup/Info"} />
                    ):(
                        <div>
                            { showOTP ? (
                                    <>
                                        <div className='m-auto !z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-blue-200 bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined'>    
                                            <img src={withus_black} alt="" className=" h-12 m-auto" /> 
                                            <label htmlFor="otp" className='text-center block mb-3 mt-1'> Create an Account </label>
                                            <div className='bg-white text-blue-500 w-fit mb-3 mx-auto p-4 rounded-full'>
                                                <BsFillShieldLockFill size={30} />
                                            </div>

                                            <h1 htmlFor="otp" className="text-gray-700 font-bold mb-3 mx-auto"> Enter Your OTP! </h1>
                                            <OTPInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autoFocus className="otp-container"></OTPInput>
                                            
                                            <button onClick={onOTPVerify} className="drop-shadow-md mt-4 bg-blue-500 w-full flex gap-1 justify-center hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline">
                                                {
                                                    loading && <CgSpinner size={20} className='mt-1 animate-spin'/>
                                                }
                                                <span>Verify OTP</span>
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='m-auto !z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-blue-200 bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined'>    
                                            <img src={withus_black} alt="" className=" h-12 m-auto" />
                                            <label className='text-center block mb-3 mt-1'> Create an Account </label>
                                            <div className='bg-white text-blue-500 w-fit mb-3 mx-auto p-4 rounded-full'>
                                                <BsTelephoneFill size={30} />
                                            </div>

                                            <h1 className="text-gray-700 font-bold mb-3 mx-auto"> Phone Number </h1>
                                            <PhoneInput country={"ca"} value={ph} onChange={setPh} className="mb-4" />

                                            {/* <div>
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
                                            </div> */}
                                        
                                            <button onClick={onSignup} className="bg-blue-500 w-full flex gap-1 justify-center hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                                                type="submit">
                                                {/* disabled={!isFormValid} */}
                                                <span>Sign Up</span>
                                            </button>

                                            <button className="mt-3 inline-block align-center font-bold text-sm text-blue-500 hover:text-blue-800" href="#"
                                                onClick={handleClick}>
                                                Try Another Way?
                                            </button>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </section>
    );
}
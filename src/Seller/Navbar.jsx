import PAFA from "../assets/pafa.jpg"
import Logo from "../assets/logo.png"


const Navbar = () => {
    return ( 
        <div>
            <div className="h-[4rem] top-0 w-full flex justify-between items-center px-2 lg:px-4 bg-[#548BBE]">
                <div className='flex items-center'>
                    <a className="btn btn-ghost normal-case text-xl text-center ml-4 mr-10" href="\">
                        <img src={Logo} alt="" className="h-14 pb-2" />
                    </a> 
                </div>
                <div className='flex items-center'>
                    <div className='mr-4'>
                        <h1 className='font-semibold text-md lg:text-lg text-black'>Koh Pich</h1>
                        <p className='text-black'>Vendor</p>
                    </div>
                    <img src={PAFA} alt="Profile" className='rounded-full object-cover w-10 h-10 lg:w-14 lg:h-14' />
                </div>
                
            </div>
            <hr className='border-black w-full' />
        </div>
       
     );
}
 
export default Navbar; 
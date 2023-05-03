import { GiHamburgerMenu } from 'react-icons/gi';
import Hacker from '../profile.png';
const Navbar = ({setToggleSidebar}) => {
    return ( 
        <div className="h-[5rem] top-0 w-full flex justify-between items-center px-2 lg:px-4 bg-gray-200">
            <div className='flex items-center'>
                <GiHamburgerMenu className='text-2xl lg:text-4xl cursor-pointer lg:hidden' onClick={()=>{
                    setToggleSidebar(true);
                }}/>
                <h1 className='font-bold text-lg lg:text-3xl ml-2 lg:ml-4'>Admin Site</h1>
            </div>
            <div className='flex items-center'>
                <div className='mr-4'>
                    <h1 className='font-semibold text-md lg:text-lg'>K_Panha</h1>
                    <p className='text-slate-500'>Admin</p>
                </div>
                <img src={Hacker} alt="Profile" className='rounded-full object-cover w-10 h-10 lg:w-14 lg:h-14' />
            </div>
        </div>
     );
}
 
export default Navbar; 
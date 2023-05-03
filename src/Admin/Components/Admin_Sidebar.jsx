import { Link } from 'react-router-dom';
import LOGO from '../withus_white.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import {RxDashboard} from 'react-icons/rx';
import {RxInfoCircled} from 'react-icons/rx';
import {TbMail, TbSettings, TbLogout} from 'react-icons/tb'
import {BsEnvelopePaper} from 'react-icons/bs';
import {BiCloudUpload} from 'react-icons/bi';

const Admin_Sidebar = ({toggleSidebar, setToggleSidebar}) => {

    const menus = [
        {
            name: "Dashboard",
            url: "/dashboard",
            icon: <RxDashboard className='text-2xl'/>
        },
        {
            name: "Request Forms",
            url: "/request_form",
            icon: <BsEnvelopePaper className='text-2xl'/>
        },
        {
            name: "Pending Posts",
            url: "/pending_posts",
            icon: <BiCloudUpload className='text-2xl' />
        },
        {
            name: "Mailbox",
            url: "/mailbox",
            icon: <TbMail className='text-2xl'/>
        },
        {
            name: "Info",
            url: "/info",
            icon: <RxInfoCircled className='text-2xl'/>
        },
        {
            name: "Setting",
            url: "/setting",
            icon: <TbSettings className='text-2xl'/>
        },
    ]

    return ( 
        <div className={`${!toggleSidebar && "-translate-x-[22rem]"} w-[20rem] md:w-[20rem] z-50 bg-[#CDDEFF] h-screen left-0 top-0 fixed transition ease-in-out duration-500 lg:static`}>
            <div className='h-[5rem] flex lg:justify-center justify-between items-center px-4 bg-[#548BBE]'>
                {/* <h1 className='text-white font-bold'>LOGO</h1> */}
                <img src={LOGO} alt="LOGO" className='lg:w-[85%] w-[65%]'/>
                <GiHamburgerMenu className='text-xl text-white cursor-pointer lg:hidden w-auto' onClick={()=>{
                    setToggleSidebar(false);
                }}/>
            </div>

            <hr className='border-black' />
            
            <div className='h-full px-3 pt-2'>
                {
                    menus.map((menu, index) =>(
                        <Link to={menu.url}>
                            <div className='h-14 flex items-center text-black p-4 cursor-pointer hover:bg-white hover:text-blue-500 hover:rounded-2xl'>
                                {menu.icon}
                                <h1 className='text-xl ml-4'>{menu.name}</h1>
                            </div>
                        </Link>
                    ))
                }
                <hr className='border-black m-2' />

                <Link to="/admin_logout">
                    <div className='h-14 flex items-center text-black p-4 cursor-pointer hover:bg-white hover:text-blue-500 hover:rounded-2xl'>
                        <TbLogout className='text-2xl'/>
                        <h1 className='text-xl ml-4'>Logout</h1>
                    </div>
                </Link>
            </div>
            
        </div>
     );
}
 
export default Admin_Sidebar;
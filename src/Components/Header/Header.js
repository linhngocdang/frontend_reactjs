import React from 'react';
import './Header.scss';
import logoHCMUTE from "../../assets/images/logoHCMUTE.png";
import logoFEEE from "../../assets/images/logoFEEE.png";
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const nav = useNavigate();
    const userLoginStatus = localStorage.getItem('userLoginStatus')
    console.log(userLoginStatus)
    const handleLogout = () => {
        localStorage.removeItem('userLoginStatus')
        nav('/login')
    }
    return (
        <div className='header bg-slate-100'>
            <div className='xl:max-w-screen-xl flex justify-between items-center py-4 mx-auto px-2 md:px-0'>
                <div className='flex '>
                    <img className='w-[20px] h-[20px] md:w-[50px] md:h-[50px] mr-1 md:mr-5' src={logoHCMUTE} alt='logo' />
                    <img className='w-[20px] h-[20px] md:w-[50px] md:h-[50px]' src={logoFEEE} alt='logo' />
                </div>
                <div className='text-center'>
                    <p className='text-xs font-semibold md:text-xl md:font-bold '>TRƯỜNG ĐẠI HỌC SƯ PHẠM KĨ THUẬT TP.HCM</p>
                    <p className='text-xs md:text-lg md:font-semibold '>KHOA ĐIỆN - ĐIỆN TỬ</p>
                </div>
                <div>
                    <div>
                        <div className='flex items-center justify-center relative'>
                            <span className='logo-user text-xs md:text-lg md:mx-1'><FaUser /></span>
                            {
                                userLoginStatus
                                    ? <button onClick={handleLogout} className='border-none md:px-1 text-xs md:text-base md:font-medium flex items-center'>Đăng xuất</button>
                                    : <Link to='/login' className='md:px-1 text-xs md:text-base md:font-medium flex items-center'>Đăng nhập</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header

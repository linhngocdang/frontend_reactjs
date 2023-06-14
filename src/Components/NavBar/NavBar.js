import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './NavBar.scss';
import { BiHome } from 'react-icons/bi';
import { FiTarget } from 'react-icons/fi';
import { MdPeopleAlt } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgCloseR } from 'react-icons/cg'
const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='navbar py-4 md:py-2.5'>
            <div className="md:hidden absolute right-5 cursor-pointer z-20 py-2 top-16" onClick={() => setOpen(!open)}>
                {
                    !open ? <GiHamburgerMenu className='text-lg text-white hover:scale-105' /> : <CgCloseR className='text-lg text-white hover:scale-105 ' />
                }
            </div>
            <div className={`text-black md:text-white text-center justify-center md:flex cursor-pointer md:m-auto  backdrop-blur-md pr-16 md:static absolute duration-500 ease-linear md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>
                <div className='mx-5 text-sm font-medium md:text-lg hover:scale-105 my-2 md:my-0'>
                    <NavLink to='/' className={({ isActive }) => isActive ? "border-b-2 border-gray-700 md:border-b-4 md:border-solid md:border-white flex items-center justify-center" : "flex items-center justify-center"}>
                        <BiHome className='mr-2' />
                        Trang chủ
                    </NavLink>
                </div>
                <div className='mx-5 text-sm font-medium md:text-lg hover:scale-105 my-2 md:my-0'>
                    <NavLink to='/diagnostic' className={({ isActive }) => isActive ? "border-b-2 border-gray-700 md:border-b-4 md:border-solid md:border-white flex items-center justify-center" : "flex items-center justify-center"}>
                        <FiTarget className='mr-2' />
                        Chẩn đoán
                    </NavLink>
                </div>
                <div className='mx-5 text-sm font-medium md:text-lg hover:scale-105 my-2 md:my-0'>
                    <NavLink to='/diagnostic-list' className={({ isActive }) => isActive ? "border-b-2 border-gray-700 md:border-b-4 md:border-solid md:border-white flex items-center justify-center" : "flex items-center justify-center"}>
                        < MdPeopleAlt className='mr-2' />
                        Danh sách bệnh nhân
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar

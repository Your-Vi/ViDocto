import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {



    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);




    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400' >
            <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/doctors'>
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {
                    token ?
                        <div className='flex items-center cursor-pointer gap-2 group relative'>
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium hidden text-gray-600 group-hover:block'>
                                <div className='min-w-48 bg-stone-200 rounded flex flex-col gap-3 p-4'>
                                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>

                        </div>
                        : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>

                }
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="" />



                <div className={`${showMenu? 'fixed w-full': 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-gray-100 transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="" />
                        <img className='w-7 cursor-pointer' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>

                    <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium '>
                        <NavLink onClick={()=>setShowMenu(false)} to={'/'}><p className='px-4 py-2 rounded inline-block' >Home</p></NavLink>
                        <NavLink  onClick={()=>setShowMenu(false)} to={'/doctors'}><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
                        <NavLink  onClick={()=>setShowMenu(false)} to={'/about'}><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                        <NavLink  onClick={()=>setShowMenu(false)} to={'/contact'}><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
                    </ul>




                </div>
            </div>

        </div>
    )
}

export default NavBar
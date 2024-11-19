import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Quickly find and book appointments with qualified doctors, view real-time availability, and manage your health records digitally. Our user-friendly interface and secure system ensure a seamless experience, saving you time and effort.</p>

            </div>




            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>

            </div>




            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 638-378-8915</li>
                    <li>vidocto@gmail.com</li>
                </ul>

            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>&copy;Copyright 2024 VidocTo. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer
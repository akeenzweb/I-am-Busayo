import React, { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion';

import './Header.css'

import Logo from '../../../assets/images/IB-logo.png'
import Menu from '../../../assets/icons/menu.svg'
import Close from '../../../assets/icons/cancel.svg'
import { Link, useLocation } from 'react-router-dom';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    // Function to toggle the dropdown
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation()
  return (
    <div className='bg-[#14332D] fixed top-0 left-0 w-full  z-50'>
        <div className='laptop-screen hidden md:flex h-[111px] justify-between items-center px-44'>
            <div><img src={Logo} alt="logo" /></div>
            <ul className='flex header-tab text-sm '>
                <Link to="/"><li className={`ml-10 cursor-pointer text-white ${location.pathname === '/' ? 'active-tab' : ''}`}>Home</li></Link>
                <Link to="/about"><li className={`ml-10 cursor-pointer text-white ${location.pathname === '/about' ? 'active-tab' : ''}`}>About Me</li></Link>
                <Link to="/impacts"><li className={`ml-10 cursor-pointer text-white ${location.pathname === '/impacts' ? 'active-tab' : ''}`}>Impacts</li></Link>
                <Link to="/contact-me"><li className={`ml-10 cursor-pointer text-white ${location.pathname === '/contact-me' ? 'active-tab' : ''}`}>Contact Me</li></Link>
                <Link to="/collage"><li className={`ml-10 cursor-pointer text-white ${location.pathname === '/collage' ? 'active-tab' : ''}`}>Collage</li></Link>
                <li className='ml-10 cursor-pointer text-white'>Blog</li>
            </ul>
        </div>
        <div className='mobile-screen flex md:hidden h-[111px] justify-between items-center px-4'>
            <div><img src={Logo} alt="logo" /></div>
            <div>
                {!isOpen && (
                    <img className='' onClick={toggleMenu} src={Menu} alt="menu" />
                )}
                
                {isOpen && (
                    <img className='' onClick={toggleMenu} src={Close} alt="close" />
                )}
            </div>
        </div>

        {/* Framer Motion Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[111px] left-0 w-full bg-white shadow-md py-4 px-4 z-50 header-tab-mobile"
          >
                <Link to="/"><li className={`text-lg mont-font cursor-pointer py-2 ${location.pathname === '/' ? 'active-tab' : ''}`}>Home</li></Link>
                <Link to="/about"><li className={`text-lg mont-font cursor-pointer py-2 ${location.pathname === '/about' ? 'active-tab' : ''}`}>About Me</li></Link>
                <Link to="/impacts"><li className={`text-lg mont-font cursor-pointer py-2 ${location.pathname === '/impacts' ? 'active-tab' : ''}`}>Impacts</li></Link>
                <Link to="/contact-me"><li className={`text-lg mont-font cursor-pointer py-2 ${location.pathname === '/contact-me' ? 'active-tab' : ''}`}>Contact Me</li></Link>
                <Link to="/collage"><li className={`text-lg mont-font cursor-pointer py-2 ${location.pathname === '/collage' ? 'active-tab' : ''}`}>Collage</li></Link>
                <li className='text-lg mont-font cursor-pointer py-2'>Blog</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'

import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import { Link } from 'react-scroll'



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[50px] flex justify-between items-center px-4 bg-gray-900 text-gray-100'>
            <div>
                <div><h1 className='text-4xl font-signature ml-4 text-zinc-300'>Adina Catucci</h1></div>
                
            </div>

            {/*menu */}
            <div className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li><Link to="home" spy={true} smooth={true} duration={500}>
                        Home
                    </Link></li>
                    <li><Link to="about" smooth={true} duration={500}>
                        About
                    </Link></li>
                    <li><Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link></li>
                    <li><Link to="work" smooth={true} duration={500}>
                        Work
                    </Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link></li>
                </ul>
            </div>


            {/* Hamburger Menu*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>



            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link></li></li>
                <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link></li></li>
                <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link></li></li>
                <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link></li></li>
                <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link></li></li>
            </ul>



            {/*Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] rounded-tr-md flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700 '>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/adinacatucci/" target="_newtab">LinkedIn <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Eleeira" target="_newtab">GitHub <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:adacatucci@gmail.com" target="_newtab">Email <HiOutlineMail size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] rounded-br-md flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1cb6Ocgp3oTeHKXuHfKH8M1AqlQX7b-yX/view?usp=share_link" target="_newtab">Resume <BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar
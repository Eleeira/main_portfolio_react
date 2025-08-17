import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NAV_ITEMS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "work", label: "Work" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav((v) => !v);
  const closeNav = () => setNav(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-[50px] bg-gray-900 text-gray-100">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4">
        {/* Brand */}
        <a href="#home" className="block">
          <h1 className="ml-4 font-signature text-4xl text-zinc-300">
            Adina Catucci
          </h1>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="list-none">
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button
          aria-label="Toggle navigation"
          aria-controls="mobile-menu"
          aria-expanded={nav}
          className="z-50 text-xl md:hidden"
          onClick={toggleNav}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          nav ? "visible opacity-100" : "invisible opacity-0"
        } absolute left-0 top-0 h-screen w-full bg-gray-900/95 transition-opacity duration-200`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="list-none text-4xl">
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer"
                onClick={closeNav}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      

      {/* Social Icons (sidebar) */}
      <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
        <ul>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between rounded-tr-md bg-gray-700 text-gray-300 duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between px-4"
              href="https://www.linkedin.com/in/adadigitalservices/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-gray-800 text-gray-300 duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between px-4"
              href="https://github.com/Eleeira"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-gray-700 text-gray-300 duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between px-4"
              href="mailto:adacatucci@proton.me"
              target="_blank"
              rel="noreferrer noopener"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between rounded-br-md bg-gray-800 text-gray-300 duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between px-4"
              href="https://drive.google.com/file/d/1ZYT6csFFiRVQPFU8E9ppX_xHra5Ae9-Z/view?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>


    </nav>
  );
};

<<<<<<< HEAD


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
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/adadigitalservices/" target="_newtab">LinkedIn <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Eleeira" target="_newtab">GitHub <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:adacatucci@proton.me" target="_newtab">Email <HiOutlineMail size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] rounded-br-md flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1tELwwnOlQ5mHVkMgoMow2wNgAGSbFDcX/view?usp=drive_link" target="_newtab">Resume <BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar
=======
export default Navbar;
>>>>>>> eebab52 (README + update, vulnerabilities)

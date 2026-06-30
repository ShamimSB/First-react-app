// import React from 'react';
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import reactLogo from '../assets/react-removebg-preview.png';


const Navbar = () => {

const [isOpen,setIsOpen] = useState(false);

const [activeLink,setActiveLink] = useState("/");

const location = useLocation();

useEffect(()=>{
  setActiveLink(location.pathname || "/")
},[location.pathname])




const toggleMenu = ()=>{
  setIsOpen(!isOpen);
}

const handleLinkClick = (path)=>{
  setActiveLink(path);
}

  return (
    <nav className="bg-[#38ada9] text-white px-4 py-4 md:py-6 sticky top-0 border-b-2 z-10 border-white" >
      <div className=" container mx-auto flex justify-between items-center">
          <img src={reactLogo} alt="React Logo" className="h-18 w-auto object-contain rounded-md" />

          {/* Mobile menu bar */}
          <div className="md:hidden">

            <button onClick={toggleMenu}>
              {
                isOpen ? <FaRegWindowClose  className="cursor-pointer"/>  : <FaBars className="cursor-pointer"/>
              }
            </button>

          </div>
          
          <ul className="hidden md:flex space-x-4 md:space-x-6">
            <li> 
              <Link to="/" onClick={()=> handleLinkClick("/")} className={`${activeLink === "/" ? "text-red-600" : "hover:text-green-400"}`}>Home</Link> 
            </li>

            <li> 
              <Link to="/products" onClick={()=> handleLinkClick("/products")} className={`${activeLink === "/products" ? "text-red-600" : "hover:text-green-400"}`}>Products</Link>
            </li>

            <li> 
              <Link to="/blogs" onClick={()=> handleLinkClick("/blogs")}  className={`${activeLink === "/blogs" ? "text-red-600" : "hover:text-green-600" }`}>Blogs</Link> 
            </li>

            <li> 
              <Link to="/contact" onClick={()=> handleLinkClick("/contact")} className={`${activeLink === "/contact" ? "text-red-600" : "hover:text-green-700"}`}>Contact</Link> 
            </li>

            <li> 
              <Link to="/about" onClick={()=> handleLinkClick("/about")} className={`${activeLink === "/about" ? "text-red-600" : "hover:text-green-700"}`} >About</Link> 
            </li>
          </ul>

          <button className="hidden md:block bg-white text-black px-4 py-2 rounded cursor-pointer hover:bg-sky-100">Login</button>

          {/* Mobile menu collapsed */}
          <div className={`md:hidden w-full absolute bg-[#079992] top-full left-0 ${isOpen ? "block" : "hidden"}`}>
             <ul className="flex flex-col items-center py-4 space-y-2">
             <li className="hover:text-green-700">Home</li>
             <li className="hover:text-green-700">Products</li>
             <li className="hover:text-green-700">Blogs</li>
             <li className="hover:text-green-700">Contact</li>
             <li className="hover:text-green-700">About</li>
             <li className="pt-4">
              <button className=" bg-white text-black px-4 py-2  rounded cursor-pointer hover:bg-sky-100">Login</button>
             </li>
          </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;
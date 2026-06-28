// import React from 'react';
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {

const [isOpen,setIsOpen] = useState(false);

const toggleMenu = ()=>{
  setIsOpen(!isOpen);
}

  return (
    <nav className="bg-green-600 text-white py-4 md:py-6" >
      <div className=" container mx-auto flex justify-between items-center">
          <h2>React practice</h2>

          {/* Mobile menu bar */}
          <div>

            <button onClick={toggleMenu}>
              {
                isOpen ? <FaRegWindowClose />  : <FaBars />
              }
            </button>

          </div>
          
          <ul className="flex space-x-4 md:space-x-6">
            <li>Home</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contace</li>
            <li>About</li>
          </ul>

          <button>Login</button>
      </div>
    </nav>
  )
}

export default Navbar;
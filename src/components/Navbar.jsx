import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close, loho } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <img src={loho} className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Sankalp| &nbsp;
            <span className="sm: block">Associate Software Engineer</span>
          </p>
        </Link>
        {/* <ul className="list-none hidden sm:flex flex-row gap-3">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium text-[18px] cursor-pointer`}
              onClick={()=>setActive(link.title)}
            >
              <Link to={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul> */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? menu : close} alt="menu"
           className="w-[28px] h-[28px] object-contain cursor-pointer"
           onClick={()=>setToggle(!toggle)}
           />
        </div>

        <div className={`${toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
        {/* <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={()=>{
                setToggle(!toggle);
                setActive(link.title)}}
            >
              <Link to={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





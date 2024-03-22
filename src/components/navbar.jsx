import React from 'react';
import betaAi from '../assets/whitebetaAi.png'
import search from '../assets/search.png'
import profile from '../assets/profile.png'
import { NavLink } from "react-router-dom";
import { useState } from 'react';


const Navbar = () => {
const [searchq,setSearchq] = useState("");

// search function
const handleSearch = (e)=>{

}
// navbar options
let Links = [
  { name: "HOME", link: "/" },
  { name: "LEAGUES", link: "/leagues" },
  { name: "MATCHES", link: "/matches" },
];
const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "normal" : "bold",
      color: isActive ? "#BBBBBB" : "white",
    };
  };

  return (
    <nav className="sticky top-0 w-full bg-pup1 py-4 px-4 h-[87px] mb-[4vh]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Text */}
        <div className="flex items-center mr-[100px]">
          <img src={betaAi} alt="BetaAI Logo" className="h-[50px] w-[50px] ml-2" />
          <span className="text-white text-[20px] font-extrabold ">BETAI</span>
        </div>
        
        {/* Search Bar */}
        <div className="flex items-center bg-[#2604ED] rounded-[10px] h-[56px] w-[424px] px-4 py-2">
          <button 
          className="text-[#898989] font-semibold "
          onClick={handleSearch}>
            <img src={search} alt="search" className='h-[24px] w-[24px]' />
          </button>
          <input
            type="text"
            placeholder="Search"
            value={searchq}
            onChange={(e)=>{}}
            className="h-[24px] bg-transparent font-serif outline-none w-full placeholder-gray-500 ml-[22px]"
          />
        </div>

 
        {/* League, Matches, Profile Options */}
        <div className="flex items-center">
        {Links.map((link, index) => {
              return (
                <>
                  <NavLink
                    className="text-white mx-[40px] text-[15px] font-[600] leading-[18px]"
                    style={navLinkStyles}
                    key={index}
                    to={link.link}
                  >
                    {link.name}
                  </NavLink>
                </>
              );
            })}
            </div>
             {/* Profile Button */}
          <button className="flex items-center text-white hover:text-gray-200">
            <img src={profile} alt="profile"  className='h-[40px] w-[40px] mr-[30px]'/>
          </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import betaAi from "../assets/whitebetaAi.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [searchq, setSearchq] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // search function
  const handleSearch = (e) => {};
  // navbar options
  let Links = [
    { name: "HOME", link: "/home" },
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
    <div className="sticky top-0">
    <nav className="top-0 w-full bg-pup1 py-2 px-4 h-[10vh]">
      <div className="container md:mx-auto flex  items-center justify-between">
        {/* Logo and Text */}
        <NavLink to="">
        <div className="flex items-center mr-[3vw]">
          <img
            src={betaAi}
            alt="BetaAI Logo"
            className=" h-[5vw] w-[5vw] md:h-[50px] md:w-[50px] ml-2"
          />
          <span className="text-white text-[20px] font-extrabold ">BETAI</span>
        </div>
    </NavLink>
        {/* Search Bar */}
        <div className="flex items-center bg-[#2604ED] rounded-[10px] h-[6vh] w-[43vw] px-4 py-2">
          <button
            className="text-[#898989] font-semibold "
            onClick={handleSearch}
          >
            <img src={search} alt="search" className="h-[24px] w-[24px]" />
          </button>
          <input
            type="text"
            placeholder="Search"
            value={searchq}
            onChange={(e) => {}}
            className="h-[24px] bg-transparent font-serif outline-none w-full placeholder-gray-500 ml-[22px]"
          />
        </div>

        {/* Mobile Navigation Icon */}
        <div onClick={toggleMenu} className="block md:hidden text-[#898989]">
          {menuOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            menuOpen
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-pup1 ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          
          <div className="w-full flex items-center m-2">
          <img
            src={betaAi}
            alt="BetaAI Logo"
            className=" h-[6vw] w-[6vw] md:h-[50px] md:w-[50px] ml-2"
          />
          <span className="text-white text-[6vh] font-bold ">BETAI</span>
        </div>
          {/* Mobile Navigation Items */}
          {Links.map((item,index) => (
            <li className="p-4 border-b rounded-lg hover:bg-[#F1F1F1] duration-300  cursor-pointer border-gshades6 text-gshades6">
            <NavLink
              className="p-4 hover:text-pup4"
              style={navLinkStyles}
              key={index}
              to={item.link}
            >
              {item.name}
            </NavLink>
            </li>
          ))}
        </ul>

    {/* League, Matches, Profile Options */}
    <div className="hidden md:flex items-center">
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
        <NavLink to="/profile">
        <button className=" md:ml-[0] flex items-center text-white hover:text-gray-200">
          <img
            src={profile}
            alt="profile"
            className="h-[40px] w-[40px] mr-[30px]"
          />
        </button>
        </NavLink>
      </div>
    </nav>
    <div className="h-[5vh] bg-[#F1F7FF] mb-[3vh] text-[#132B47] font-serif font-[800] text-[15px] px-[7vw] md:px-[3vw]">{"spain"}</div>
    </div>
  );
};

export default Navbar;

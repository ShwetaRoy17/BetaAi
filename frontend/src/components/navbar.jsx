import React from "react";
import betaAi from "../assets/whitebetaAi.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchBar from "./searchbar";
import { Signin } from "./SignInButton";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const stadium_week = useSelector((state)=>state.match.stadium_name)
  const game_week = useSelector((state)=>state.match. game_week)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <nav className="top-0 w-full bg-pup1 py-[12px]  md:py-2 xl:grid  px-4 h-[10vw]  md:h-[6vw] min-h-[70px] overflow-x-hidden">
        <div className=" md:mx-[3vw] flex  items-center justify-between grid-cols-[8vw,25vw,40vw,10vw] gap-[2%]">
          {/* Logo and Text */}
          <div className=" mr-[2vw] ">
            <NavLink to="" className="flex items-center ">
              <img
                src={betaAi}
                alt="BetaAI Logo"
                className=" h-[5vw] w-[5vw] md:h-[3.5vw] xl:h-[2.8vw] xl:w-[2.8vw] md:w-[3.5vw] ml-2"
              />
              <span className="text-white text-[3vw] md:text-[1.5vw] xl:text-[1vw] font-extrabold ">
                BETAI
              </span>
            </NavLink>
          </div>
          <div className="">
            <SearchBar />
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

            <div className="w-full flex items-center m-2" key={0}>
              <img
                src={betaAi}
                alt="BetaAI Logo"
                className=" h-[6vw] w-[6vw] md:h-[50px] md:w-[50px] ml-2"
              />
              <span className="text-white md:text-[6vw] font-bold ">BETAI</span>
            </div>
            {/* Mobile Navigation Items */}
            {Links.map((item, index) => (
              <li className="p-4 border-b rounded-lg hover:bg-[#F1F1F1] duration-300  cursor-pointer border-gshades6 text-gshades6">
                <NavLink
                  className="p-4 hover:text-pup4"
                  style={navLinkStyles}
                  key={index + 1}
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* League, Matches, Profile Options */}
          <div className="hidden md:flex items-center ">
            {Links.map((link, index) => {
              return (
                <>
                  <NavLink
                    className="text-white ml-[5vw] text-[1.5vw] font-[600] leading-[18px]"
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
          <div className="">

          <Signin />
          </div>
          {/* <NavLink to="/profile">
        <button className=" md:ml-[2vw] flex items-center text-white hover:text-gray-200">
          <img
            src={profile}
            alt="profile"
            className="h-[8vw] w-[8vw] md:h-[40px] md:w-[40px] md:mr-[30px]"
          />
        </button>
        </NavLink> */}
        </div>
      </nav>
      <div className="h-[5vh] bg-[#F1F7FF] mb-[3vh] text-[#132B47] font-serif font-[800] text-[15px] px-[7vw] md:px-[3vw]">
       {stadium_week?
       `${stadium_week}:ROUND ${game_week}`:"Football Rounds displayed here"}
      </div>
    </div>
  );
};

export default Navbar;

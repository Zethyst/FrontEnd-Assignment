import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { setShowMobileMenu, setCurrentPage } from "../store/reducers/menuSlice";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faXmark,
  faRightFromBracket,
  faRightToBracket,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faXTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { faSquareFull, faCircle } from "@fortawesome/free-regular-svg-icons";
import Tab from "./Tab";

library.add(faMagnifyingGlass, faBars);



const MobileBurgerView = () => {
  const dispatch = useDispatch();
  const { showMobileMenu, currentPage } = useSelector((state) => state.menu);
  return (
    <div
      className={`${showMobileMenu ? "openMobilePage" : "closeMobilePage"
        } w-[100vw] min-h-[100vh] max-h-[100vh]  fixed left-[-2000px] -z-20  items-center justify-start overflow-hidden  `}
    >
      {/* MENU CONTAINER*/}
      <div
        className={` ${showMobileMenu ? "openMobileContainer" : "closeMobileContainer"
          } bg-[#8EB0F0] text-black w-[70vw] min-h-[100vh] z-20 max-h-[100vh] fixed left-[-2000px] flex justify-center items-center overflow-hidden  transition-all ease-in duration-500`}
      >
        <div className="mm-Wrapper flex flex-col justify-center items-center gap-24 overflow-hidden py-16 px-5 w-full z-30">
          <img src="/robot.png" alt="Robot" className="block" />
          {/* Search Box */}
          <div className={`search-box items-center text-black rounded-full w-64 bg-white px-3 py-1 transition-all duration-300 ease-in-out 
                   }`}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xl"
              className="hover:text-white"
            />
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search"
              className="bg-transparent text-black placeholder:text-black px-2 flex-grow text-center focus:outline-none"
            />
          </div>

        {/* Tabs */}
        <div className={`flex flex-wrap justify-center gap-6 w-full items-center py-2 px-10 
                }`}>

          <Tab title="Option 1" />
          <Tab title="Option 2" />
          <Tab title="Option 3" />
          <Tab title="Option 4" />
          <Tab title="Option 5" />
          <Tab title="Option 6" />
          <Tab title="Option 7" />
          <Tab title="Option 8" />
          <Tab title="More" />
        </div>
        </div>
      </div>

      {/* BACKGROUND */}
      <div
        onClick={() => setShowMobileMenu(false)}
        className={` ${showMobileMenu ? "openMobileBg" : "closeMobileBg"
          } w-[100vw] min-h-[100vh] max-h-[100vh] relative transition-all ease-in duration-500 flex justify-center items-center overflow-hidden -z-10 `}
      ></div>
    </div>
  );
};

export default MobileBurgerView;

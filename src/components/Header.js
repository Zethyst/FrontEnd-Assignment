import React, { useState, useEffect } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import Tab from './Tab';
import { useSelector, useDispatch } from "react-redux";
import { setShowMobileMenu, setCurrentPage } from "../store/reducers/menuSlice";

library.add(faMagnifyingGlass, faBars);

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
    const dispatch = useDispatch();
    const { showMobileMenu, currentPage } = useSelector((state) => state.menu);


    const toggleMobileMenu = () => {
        dispatch(setShowMobileMenu(!showMobileMenu));
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        // Add event listener on mount
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (


        <div
            className={` top-0  z-50 w-full px-6 md:px-14 flex flex-col justify-between items-center gap-5 `}
        >
            <div className="flex justify-between w-full items-center">


                {/* MOBILE HAMBURGER */}

                <div className={`${showMobileMenu ? "change" : ""}  block md:hidden cursor-pointer`} onClick={() => toggleMobileMenu()}>
                    <div className="bar1 h-1 w-9"></div>
                    <div className="bar2 h-1 w-6"></div>
                    <div className="bar3 h-1 w-4"></div>
                </div>

                {/* Logo */}
                <img src="/robot.png" alt="Robot" className="hidden md:inline-block translate-y-2" />
                {/* Search Box */}
                <div className={`search-box items-center text-white rounded-full w-96 bg-[#8EB0F0] px-3 py-1 transition-all duration-300 ease-in-out ${(isMenuOpen || !isMobile) ? "flex" : "hidden"
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
                        className="bg-transparent text-white placeholder:text-white px-2 flex-grow text-center focus:outline-none"
                    />
                </div>

                {/* Right Icons */}
                <div className={`flex justify-between items-center space-x-4 
                }`}>
                    <img src="/support.png" alt="Support Icon" width="25px" />
                    <img src="/language.png" alt="Language Icon" width="25px" />
                    <img src="/bell.png" alt="Notification Icon" width="25px" />
                    <div className="rounded-full h-10 w-10 flex justify-center items-center bg-[#8EB0F0] text-white">
                        <p>DS</p>
                    </div>
                </div>
            </div>
            {/* Tabs */}
            <div className={`flex flex-wrap justify-center gap-11 w-full items-center py-2 px-10 ${(isMenuOpen || !isMobile) ? "flex" : "hidden"
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

    );
}

export default Header;

import React, { useState } from 'react'

import img from '../assets/images/foot-logo.png'
import mahakumbh from '../assets/images/MahaKumbh-Logo.png'
import logo from '../assets/images/logo.png'


import home from "../assets/images/home.png";
import skip from "../assets/images/skiptocontent.png";
import reader from "../assets/images/screen-reader.png";
import sitemap from "../assets/images/sitemap.png";
import pwd from "../assets/images/pwd-icon.png";
import language from "../assets/images/language.png";

import { IoSearch } from "react-icons/io5";


const Navbar = () => {
      const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <nav className="absolute right-49 z-[999] bg-white border-b border-[#cccccc75] px-10 py-1 transform skew-x-[40deg] shadow-md">
                <ul className="flex items-center justify-end skew-x-[-40deg] m-0 p-0">
                    {/* Home */}
                    <li className="px-4 py-1">
                        <a href="Default.aspx" title="Home" tabIndex={1}>
                            <img src={home} alt="Home" className="w-5 h-5" />
                        </a>
                    </li>

                    {/* Skip to content */}
                    <li className="px-4 py-1">
                        <a href="#" title="Skip to Main Content" tabIndex={2}>
                            <img src={skip} alt="Skip to Main Content" className="w-5 h-5" />
                        </a>
                    </li>

                    {/* Screen Reader */}
                    <li className="px-4 py-1">
                        <a href="#" title="Screen Reader Access" tabIndex={3}>
                            <img src={reader} alt="Screen Reader Access" className="w-5 h-5" />
                        </a>
                    </li>

                    {/* Sitemap */}
                    <li className="px-4 py-1">
                        <a href="#" title="Sitemap" tabIndex={4}>
                            <img src={sitemap} alt="Sitemap" className="w-5 h-5" />
                        </a>
                    </li>

                    {/* PwD Dropdown */}
                    <li className="relative px-4 py-1 group">
                        <a href="#" title="PwD Features">
                            <img src={pwd} alt="PwD Features" className="w-5 h-5" />
                        </a>
                        <ul className="absolute top-8 left-0 hidden group-hover:block bg-white border rounded shadow-md text-sm min-w-[120px]">
                            <li>
                                <a href="#" tabIndex={5} className="block px-3 py-1 hover:bg-gray-100">
                                    A-
                                </a>
                            </li>
                            <li>
                                <a href="#" tabIndex={6} className="block px-3 py-1 hover:bg-gray-100">
                                    A
                                </a>
                            </li>
                            <li>
                                <a href="#" tabIndex={7} className="block px-3 py-1 hover:bg-gray-100">
                                    A+
                                </a>
                            </li>
                            <li>
                                <a href="en_Themes/style.css" tabIndex={8} className="block px-3 py-1 hover:bg-gray-100">
                                    Default Theme
                                </a>
                            </li>
                            <li>
                                <a href="en_Themes/contrast.css" tabIndex={9} className="block px-3 py-1 hover:bg-gray-100">
                                    Black Theme
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* Language */}
                    <li className="px-4 py-1">
                        <a href="#" title="हिन्दी संस्करण हेतु यहां क्लिक करें" tabIndex={10}>
                            <img src={language} alt="Hindi Version" className="w-5 h-5" />
                        </a>
                    </li>

                    {/* Search */}
                    <li className="px-4 py-1 relative">
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="text-[#0a0a0a] hover:text-black"
                        >
                            <IoSearch size={20}/>
                        </button>

                        {searchOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-sm font-bold">Site Search</h4>
                                    <button onClick={() => setSearchOpen(false)}>
                                        <i className="fa fa-times-circle-o text-red-500" />
                                    </button>
                                </div>
                                <div className="flex mb-2">
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="flex-1 border px-2 py-1 rounded-l"
                                    />
                                    <button className="bg-blue-600 text-white px-3 rounded-r">
                                        Submit
                                    </button>
                                </div>
                                <h5 className="text-xs font-bold mt-2">Common Search Terms</h5>
                                <div className="text-xs space-y-1">
                                    <p><a href="#">Fee & Scholarship</a></p>
                                    <p><a href="#">Board of Governors</a></p>
                                    <p><a href="#">Admission</a></p>
                                    <p><a href="#">Search Faculty</a></p>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
            <header className="relative z-10 shadow-[rgba(0,0,0,0.11)_0px_0px_15p] bg-[linear-gradient(90deg,rgb(194,54,101)_-10%,rgb(27,30,111)_18%)]">
                <div className="w-full mx-auto px-4 md:px-8 pb-2">
                    <div className="flex flex-wrap items-center justify-between">
                        {/* Left Logo Section */}
                        <div className="flex items-center w-3/4 md:w-7/12">
                            <div className="w-[75px]">
                                <a href="#" className="block">
                                    <img src={img} alt="Logo" className="max-w-full" />
                                </a>
                            </div>
                            <div className="relative pl-11">
                                <h4 className="font-bakbak text-[2.3em] mt-[1px] mb-[2px] text-[#1d113e]">
                                    Nivesh Mitra
                                </h4>
                                <p className="text-black font-semibold text-[1.05em] pl-3">
                                    Single Window System, Government of Uttar Pradesh
                                </p>
                                {/* Decorative white shape */}
                                <span className="absolute h-0 left-[1px] -top-2 -z-1 border-t-[106px] border-t-white border-l-[39px] border-l-transparent w-[300%]" />
                            </div>
                        </div>

                        {/* Right Logo Section */}
                        <div className="flex justify-end items-center w-1/4 md:w-5/12 space-x-3">
                            <a
                                href="https://kumbh.gov.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={mahakumbh}
                                    alt="महाकुंभ प्रयागराज 2025"
                                    title="महाकुंभ प्रयागराज 2025"
                                    className="max-w-[73px]"
                                />
                            </a>
                            <a
                                href="https://invest.up.gov.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={logo} alt="Invest UP" className="max-w-[73px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
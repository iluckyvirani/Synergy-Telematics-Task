import { useState } from "react";
import { FaBars } from "react-icons/fa";
import banner from "../../assets/images/banner-1.jpg";
import pmModi from "../../assets/images/pm-modi.png";
import homeYogi from "../../assets/images/homeyogi.png";
import shape1 from "../../assets/images/shape-1.png";

import { TiArrowSortedDown } from "react-icons/ti";


export default function BannerSection() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="relative banner-section z-10">
            {/* Navbar */}
            <div className="primarymenu absolute m-auto z-9 right-0 px-5 ">
                <nav className="relative flex items-center justify-between">
                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-xl px-3 py-2 bg-transparent border-0 border-transparent rounded-[4px] text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FaBars />
                    </button>

                    {/* Menu */}
                    <ul
                        className={`flex-col lg:flex lg:flex-row lg:items-center lg:space-x-6 ${menuOpen ? "flex" : "hidden"
                            }`}
                    >
                        <li className="relative group text-white hover:bg-white hover:text-black">
                            <button className="nav-link font-semibold duration-300 flex items-center px-3 py-3">
                                About UP
                                <TiArrowSortedDown />
                            </button>
                            <ul className="absolute hidden m-w-sm top-auto ml-auto mt-auto group-hover:block bg-white shadow-[rgba(0,0,0,0.5)20px_20px-25px] w-[240px] rounded-br-[5px] rounded-bl-[5px]">
                                <li>
                                    <a href="About.aspx?ID=divcm" className="text-black1 font-[0.9em] block px-4 py-2.5 ">Hon’ble CM's Message</a>
                                </li>
                                <li>
                                    <a href="AdvantageUP.aspx" className="text-black1 font-[0.9em] block px-4 py-2.5">Advantage UP</a>
                                </li>
                            </ul>
                        </li>

                        <li className="relative group text-white hover:bg-white hover:text-black">
                            <button className="nav-link font-semibold duration-300 flex items-center px-3 py-3">
                                Investor Assistance
                                <TiArrowSortedDown />
                            </button>
                            <ul className="absolute hidden m-w-sm top-auto ml-auto mt-auto group-hover:block bg-white shadow-[rgba(0,0,0,0.5)20px_20px-25px] w-[240px] rounded-br-[5px] rounded-bl-[5px]">
                                <li>
                                    <a href="InvAssis.aspx?ID=chklst" className="text-black1 font-[0.9em] block px-4 py-2.5">
                                        Comprehensive List of Approvals, Checklists, Procedures &
                                        Timelines
                                    </a>
                                </li>
                                <li>
                                    <a href="Documents/Compendium.pdf" className="text-black1 font-[0.9em] block px-4 py-2.5">Investment Compendium</a>
                                </li>
                                <li>
                                    <a href="Documents/PolicyHighlight.pdf" className="text-black1 font-[0.9em] block px-4 py-2.5">Policy Highlights</a>
                                </li>
                                <li>
                                    <a href="Documents/IndustrialParks.pdf" className="text-black1 font-[0.9em] block px-4 py-2.5">
                                        Industrial Parks/Estates/SEZ
                                    </a>
                                </li>
                                <li>
                                    <a href="ServiceSOP.aspx" className="text-black1 font-[0.9em] block px-4 py-2.5">
                                        SOP (Standard Operational Procedures) of Services
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="relative group text-white hover:bg-white hover:text-black">
                            <button className="nav-link font-semibold duration-300 flex items-center px-3 py-3">
                                Feedback
                                <TiArrowSortedDown />
                            </button>
                            <ul className="absolute hidden m-w-sm top-auto ml-auto mt-auto group-hover:block bg-white shadow-[rgba(0,0,0,0.5)20px_20px-25px] w-[240px] rounded-br-[5px] rounded-bl-[5px]">
                                <li>
                                    <a href="PolicyComment.aspx" className="text-black1 font-[0.9em] block px-4 py-2.5">Draft Business Regulation</a>
                                </li>
                                <li>
                                    <a href="feedback.aspx" className="text-black1 font-[0.9em] block px-4 py-2.5">Query/Grievance Redressal</a>
                                </li>
                            </ul>
                        </li>

                        <li className="relative group text-white hover:bg-white hover:text-black">
                            <button className="nav-link font-semibold duration-300 flex items-center px-3 py-3">
                                Media
                                <TiArrowSortedDown />
                            </button>
                            <ul className="absolute hidden m-w-sm top-auto ml-auto mt-auto group-hover:block bg-white shadow-[rgba(0,0,0,0.5)20px_20px-25px] w-[240px] rounded-br-[5px] rounded-bl-[5px]">
                                <li>
                                    <a href="media.aspx?ID=1" className="text-black1 font-[0.9em] block px-4 py-2.5">Press Releases</a>
                                </li>
                                <li>
                                    <a href="media.aspx?ID=3" className="text-black1 font-[0.9em] block px-4 py-2.5">Awards</a>
                                </li>
                            </ul>
                        </li>

                        <li className="relative group text-white hover:bg-white hover:text-black">
                            <button className="nav-link font-semibold duration-300 flex items-center px-3 py-3">
                                Information
                                <TiArrowSortedDown />
                            </button>
                            <ul className="absolute hidden m-w-sm top-auto ml-auto mt-auto group-hover:block bg-white shadow-[rgba(0,0,0,0.5)20px_20px-25px] w-[240px] rounded-br-[5px] rounded-bl-[5px]">
                                <li>
                                    <a href="Information.aspx?ID=1" className="text-black1 font-[0.9em] block px-4 py-2.5">
                                        Government Orders & Circulars
                                    </a>
                                </li>
                                <li>
                                    <a href="UserManual.aspx" className="text-black1 font-[0.9em] block px-4 py-2.5">User Manual</a>
                                </li>
                                <li>
                                    <a href="NOC_Search.aspx" className="text-black1 font-[0.9em] block px-4 py-2.5">Search NOC</a>
                                </li>
                                <li>
                                    <a href="InvAssis.aspx?ID=dptlst" className="text-black1 font-[0.9em] block px-4 py-2.5">Departments</a>
                                </li>
                                <li>
                                    <a href="CriminalProvisionsList.aspx" className="text-black1 font-[0.9em] block px-4 py-2.5">
                                        Criminal Provisions List
                                    </a>
                                </li>
                                <li>
                                    <a href="https://invest.up.gov.in/best-practices/" className="text-black1 font-[0.9em] block px-4 py-2.5" target="_blank" rel="noreferrer">
                                        Best Practices
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="relative group text-white hover:bg-white hover:text-black">
                            <button className="nav-link font-semibold duration-300 flex items-center px-3 py-3">
                                Contact Us
                                <TiArrowSortedDown />
                            </button>
                            <ul className="absolute hidden m-w-sm top-auto ml-auto mt-auto group-hover:block bg-white shadow-[rgba(0,0,0,0.5)20px_20px-25px] w-[240px] rounded-br-[5px] rounded-bl-[5px]">
                                <li>
                                    <a href="Contact.aspx?ID=iidc" className="text-black1 font-[0.9em] block px-4 py-2.5">
                                        Infrastructure & Industrial Development Department
                                    </a>
                                </li>
                                <li>
                                    <a href="Contact.aspx?ID=dcl" className="text-black1 font-[0.9em] block px-4 py-2.5">Invest UP Officials</a>
                                </li>
                                <li>
                                    <a href="Contact.aspx?ID=dno" className="text-black1 font-[0.9em] block px-4 py-2.5">Nodal Officers (Dept.)</a>
                                </li>
                                <li>
                                    <a href="Contact.aspx?ID=hl" className="text-black1 font-[0.9em] block px-4 py-2.5">Invest UP Helpline</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <button className="nav-link font-semibold duration-300 flex items-center px-3 py-3 text-white hover:bg-white hover:text-black">
                                Dashboard
                            </button>
                        </li>
                        <li>
                            <button className="nav-link font-semibold duration-300 flex items-center px-3 py-3 text-white hover:bg-white hover:text-black">
                                Login
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>


            {/* Banner */}
            <img src={banner} alt="Banner" className="w-full relative z-0" />

            {/* Leader Section */}
            <div className="leader absolute left-0 top-0 w-[250px] z-1">
                <ul>
                    <li className="relative p-6">
                        <div className="pmmodi relative z-5 bg-white rounded-[50%] text-center w-[185px] h-[185px] mx-auto flex flex-col items-center justify-center shadow px-6">
                            <img src={pmModi} alt="PM Modi" className="h-[90px]" />
                            <h4 className="font-bakbak text-sm font-normal mb-0 text-[#1d113e]">Narendra Modi</h4>
                            <p className="text-xs font-normal text-wrap text-[#1d113e]">Hon'ble Prime Minister of India</p>
                        </div>
                        <span className="shape-1 absolute top-0 left-0 z-0 opacity-50">
                            <img src={shape1} alt="shape" className="relative" />
                        </span>
                        <span className="circle-1"></span>
                        <span className="circle-2"></span>
                    </li>

                    <li className="relative p-6">
                        <div className="pmmodi relative z-5 bg-white rounded-[50%] text-center w-[185px] h-[185px] mx-auto flex flex-col items-center justify-center shadow px-6">
                            <img src={homeYogi} alt="CM Yogi" className="h-[90px]" />
                            <h4 className="font-bakbak text-sm font-normal mb-0 text-[#1d113e]">Yogi Adityanath</h4>
                            <p className="text-xs font-normal text-wrap text-[#1d113e]">
                                Hon’ble Chief Minister of Uttar Pradesh
                            </p>
                        </div>
                        <span className="shape-2 absolute bottom-0 right-0 opacity-50">
                            <img src={shape1} alt="shape" className="relative" />
                        </span>
                        <span className="circle-1"></span>
                        <span className="circle-2"></span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

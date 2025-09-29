import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import img from '../assets/images/foot-logo.png'


const Footer = () => {
    return (
        <footer className="footer relative bg-[#1d113e] z-5 bg-repeat-x bg-cover ">
            {/* Gradient Background Shape */}
            {/* <div className="absolute -left-72 -top-14 w-[57%] h-[370px] -skew-x-12 shadow-2xl bg-gradient-to-r from-pink-600 to-indigo-900 z-0"></div> */}

            <div className="container mx-auto px-6 py-4 relative z-5">
                <div className="grid md:grid-cols-12 gap-10">
                    {/* Left Section */}
                    <div className="md:col-span-4 space-y-5">
                        <div className="flex items-center space-x-4">
                            <div className="w-20">
                                <img src={img} alt="Logo" className="w-full" />
                            </div>
                            <div className="text-white">
                                <h4 className="text-xl  font-bakbak mb-[5px]">Nivesh Mitra (V2.0)</h4>
                                <p className="text-sm leading-snug font-bakbak ">
                                    Single Window System <br /> Government of Uttar Pradesh
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-3 text-white">
                            <li className="relative flex items-start space-x-3 font-bakbak address">
                                <FaMapMarkerAlt size={22} />
                                <p>
                                    Invest UP <br/>  Picup Bhawan, Block A, 4th Floor, Lucknow, UP
                                </p>
                            </li>
                            <li className="flex items-start space-x-3 font-bakbak address">
                                <FaPhoneAlt size={20} />
                                <p>
                                    Call <br/> 
                                    0522 6923000
                                    (9.30 AM - 6 PM, Mon - Sat, Working days)
                                </p>
                            </li>
                            <li className="flex items-start space-x-3 font-bakbak address">
                                <FaEnvelope size={20} />
                                <p>
                                    Email <br/> info.investup.org.in
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="md:col-span-8 space-y-6 pl-13 pt-8">
                        {/* Links */}
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white text-sm">
                            <li><a href="CopyrightStatement.aspx" className="hover:underline p-1" style={{color:"white"}}>Copyright Policy</a></li>
                            <li><a href="Terms.aspx" className="hover:underline p-1" style={{color:"white"}}>Terms & Conditions</a></li>
                            <li><a href="PrivacyPolicy.aspx" className="hover:underline p-1" style={{color:"white"}}>Privacy Policy</a></li>
                            <li><a href="HyperlinkingPolicy.aspx" className="hover:underline p-1" style={{color:"white"}}>Hyperlinking Policy</a></li>
                            <li><a href="Sitemap.aspx" className="hover:underline p-1" style={{color:"white"}}>Site Map</a></li>
                            <li><a href="Disclaimer.aspx" className="hover:underline p-1" style={{color:"white"}}>Disclaimer</a></li>
                            <li><a href="Cyber_Security.aspx" className="hover:underline p-1" style={{color:"white"}}>Cyber Security</a></li>
                            <li><a href="https://jansunwai.up.nic.in/" target="_blank" rel="noopener noreferrer" className="hover:underline p-1" style={{color:"white"}}>Jansunwai-Samadhan</a></li>
                            <li><a href="https://up.nic.in/" target="_blank" rel="noopener noreferrer" className="hover:underline p-1" style={{color:"white"}}>NIC-UP</a></li>
                        </ul>

                        {/* Visitor, Last Updated, Social */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center text-white border border-white/30 p-4 rounded">
                                <p className="font-bold mb-2">Visitors</p>
                                <div className="text-lg tracking-widest">030796393</div>
                            </div>

                            <div className="text-center text-white border border-white/30 p-4 rounded">
                                <p className="font-bold mb-2">Last Updated on</p>
                                <div>27-09-2025 at 11:59 PM</div>
                            </div>

                            <div className="text-center text-white border border-white/30 p-4 rounded">
                                <p className="font-bold mb-2">Social Media Connect</p>
                                <div className="flex justify-center space-x-4">
                                    <a href="https://www.facebook.com/InvestUPNew/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookSquare size={28} className="text-blue-500 hover:text-blue-600" />
                                    </a>
                                    <a href="https://twitter.com/_InvestUP" target="_blank" rel="noopener noreferrer">
                                        <FaTwitterSquare size={28} className="text-sky-400 hover:text-sky-500" />
                                    </a>
                                    <a href="https://www.youtube.com/@easeofdoingbusinessudyogba4129" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube size={28} className="text-red-500 hover:text-red-600" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <p className="text-white text-right text-sm pt-4">
                            © 2023 - IT Solution powered by National Informatics Centre Uttar Pradesh State Unit
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";


import license from '../../assets/images/license.png'
import userfeedback from '../../assets/images/userfeedback.png'
import back from '../../assets/images/back.png'
import arrow from '../../assets/images/arrow.png'
import shape_ss_04 from '../../assets/images/shape_ss_04.png'
import shape_ss_05 from '../../assets/images/shape_ss_05.png'
import shape_ss_06 from '../../assets/images/shape_ss_06.png'
import shape_ss_07 from '../../assets/images/shape_ss_07.png'
import statsimg from '../../assets/images/stats-img.png'

const StatisticsSection = () => {
    return (
        <section className="relative statstic line1 py-5 overflow-hidden ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start gap-8">
                    {/* Left Side - Stats */}
                    <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Licenses/NOCs Statistics */}
                        <div className="mt-[2em]">
                            <img
                                src={license}
                                alt="Licenses/NOCs"
                                className="block sm:max-w-[80%]  text-center m-auto md:text-left md:m-0"
                            />
                            <h5 className="font-bakbak mt-2 text-[#212529] text-center m-auto md:text-left md:m-0">
                                Licenses/NOCs Statistics
                            </h5>
                            <ul className="Statistics  space-y-2 text-sm pl-7 text-[#212529] w-[80%] sm:w-full text-center m-auto md:text-left md:mt-7 mt-4">
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-[#4a9a45] before:rounded">
                                    Licenses/NOCs Issued:{" "}
                                    <span className="font-medium text-[#212529]">(1829283) 88.44%</span>
                                </li>
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-yellow-500 before:rounded">
                                    Rejected:{" "}
                                    <span className="font-medium text-[#212529]">(182639) 8.83%</span>
                                </li>
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-blue-400 before:rounded">
                                    Queries/Objections:{" "}
                                    <span className="font-medium text-[#212529]">(43708) 2.11%</span>
                                </li>
                                <li className="relative  before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-gray-400 before:rounded">
                                    Requests Pending:{" "}
                                    <span className="font-medium text-[#212529]">(12836) 0.62%</span>
                                </li>
                            </ul>
                        </div>

                        {/* User Experience */}
                        <div className="mt-[2em]">
                            <img
                                src={userfeedback}
                                alt="User Experience"
                                className="block max-w-[80%] text-center m-auto md:text-left md:m-0"
                            />
                            <h5 className="font-bakbak mt-2 text-[#212529] text-center m-auto md:text-left md:m-0">
                                User Experience
                            </h5>
                            <ul className="Statistics  space-y-2 text-sm pl-7 text-[#212529] w-[80%] sm:w-full text-center m-auto md:text-left md:mt-7 mt-4">
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-green-600 before:rounded">
                                    Satisfied:{" "}
                                    <span className="font-medium text-[#212529]" >(1112660) 90.76%</span>
                                </li>
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-yellow-500 before:rounded">
                                    Moderate:{" "}
                                    <span className="font-medium text-[#212529]">(76875) 6.27%</span>
                                </li>
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-red-500 before:rounded">
                                    Unsatisfied:{" "}
                                    <span className="font-medium text-[#212529]">(36461) 2.97%</span>
                                </li>
                            </ul>
                        </div>

                        {/* User Feedback */}
                        <div className="">
                            <div className="relative max-w-[500px] mt-[40px] mb-[40px] ml-auto mr-auto border border-[#009d35] bg-[#baecc9] w-full flex justify-center">
                                <img
                                    src={back}
                                    alt="Likert Background"
                                    className="max-w-[100%] text-center m-auto md:text-left md:m-0"
                                />
                                <img
                                    src={arrow}
                                    alt="Likert Arrow"
                                    className="arrow-imgg"
                                />
                            </div>
                            <h5 className="font-bakbak mt-2 text-[#212529] text-center m-auto md:text-left md:m-0">
                                User Feedback
                            </h5>
                            <ul className="Statistics  space-y-2 text-sm pl-7 text-[#212529] w-[80%] sm:w-full text-center m-auto md:text-left md:mt-7 mt-4">
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-green-700 before:rounded">
                                    Excellent: <span className="font-medium text-[#212529]">(100773) 8.22%</span>
                                </li>
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-green-400 before:rounded">
                                    Very Good: <span className="font-medium text-[#212529]">(1011887) 82.54%</span>
                                </li>
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-yellow-400 before:rounded">
                                    Good: <span className="font-medium text-[#212529]">(76875) 6.27%</span>
                                </li>
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-orange-400 before:rounded">
                                    Fair: <span className="font-medium text-[#212529]">(9722) 0.79%</span>
                                </li>
                                <li className="relative before:absolute before:-left-[31px] before:top-1 before:w-4 before:h-4 before:bg-red-500 before:rounded">
                                    Poor: <span className="font-medium text-[#212529]">(26739) 2.18%</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="sm:block hidden w-full md:w-1/2 ">
                        <div className="relative ">
                            <div className="process_shape">
                                <img
                                    className="process_shape_04"
                                    src={shape_ss_04}
                                    alt="process_shape_04"
                                />
                                <img
                                    className="process_shape_05"
                                    src={shape_ss_05}
                                    alt="process_shape_05"
                                />
                                <img
                                    className="process_shape_06"
                                    src={shape_ss_06}
                                    alt="process_shape_06"
                                />
                                <img
                                    className="process_shape_07"
                                    src={shape_ss_07}
                                    alt="process_shape_08" />
                                <img
                                    className="process_shape_10"
                                    src={statsimg}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;

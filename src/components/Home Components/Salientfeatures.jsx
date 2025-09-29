import React, { useState } from 'react'

import chart from '../../assets/images/chart.png'
import { FaHandPointRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const features = [
    {
        title: "Salient Features",
        items: [
            "Completely Online - End to End Online Application",
            "Know Your Approvals & Incentives",
            "One Time Common information to be Submitted through CAF",
            "Consolidated Fee Payment",
            "Third Party Verification",
            "Land Bank (GIS) Information",
        ],
    },
    {
        title: "Key Features",
        items: [
            "Single sign-on technology",
            "Online availability of application procedures, checklists, fees & timelines",
            "Online application status tracking",
            "Automated SMS/Email notifications on each stage of application processing",
            "Inter Department information sharing",
            "Centralized information availability",
        ],
    },
    {
        title: "Advance Features",
        items: [
            "Realtime Data Analytics/Dashboards/MIS for Stakeholders at District Level",
            "Comprehensive Grievance Management System/ChatBot",
            "Automated Feedback System",
            "Notification Module for Departments/Applicants",
            "Realtime Escalation Mechanism",
            "Incentive Management System",
            "District Ease of Doing Business Ranking",
        ],
    },
    {
        title: "Government Mandates",
        items: [
            "Industrial/Business applications acceptance only through Nivesh Mitra",
            "Only One Time Query on applications within 07 days of application submission",
            "Digitally/e- Signed NOCs/Licenses/Certificates",
            "Mandated Service Timelines in Public Service Delivery Guarantee Act",
            "Highest level review of submitted application",
        ],
    },
];

const AccordionItem = ({ title, items, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 mb-0">
            <button
                onClick={onClick}
                className={` font-bakbak w-full flex justify-between items-center py-3 text-left font-semibold  focus:outline-none accordion-button ${isOpen ? 'text-[#212529]' : 'text-[#ed3f75]'}` }
            >
                {title}
                <span
                    className="transition-transform duration-30"
                >
                    {isOpen ? <FaMinus size={25}/> : <FaPlus size={25}/> }
                </span>
            </button>
            {isOpen && (
                <div className="accordion-body  px-5 py-4">
                    <ul className="p-0 list mb-4">
                        {items.map((item, idx) => (
                            <li
                                key={idx}
                                className="relative flex items-center gap-2 border-b border-dashed border-gray-400 pb-1 last:border-none"
                            >
                                <FaHandPointRight color='#7212f1' />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};



const Salientfeatures = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className='relative py-5 line'>
            <div className="container mx-auto relative px-6 salient_features">
                <div className='grid md:grid-cols-2 gap-8'>
                    <div>
                        <div className='relative title'>
                            <h2 className="font-bakbak text-2xl md:text-3xl  text-[#1d113e] relative pb-6">
                                Features of Nivesh Mitra
                            </h2>
                        </div>
                        <div className="rounded-lg accordion-item  overflow-hidden">
                            {features.map((feature, idx) => (
                                <AccordionItem
                                    key={idx}
                                    title={feature.title}
                                    items={feature.items}
                                    isOpen={openIndex === idx}
                                    onClick={() =>
                                        setOpenIndex(openIndex === idx ? null : idx)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className='relative title'>
                            <h2 className="font-bakbak text-2xl md:text-3xl  text-[#1d113e] relative pb-6">
                                Doing Business in Uttar Pradesh
                                <span>Now Becomes Even More Easy</span>
                            </h2>
                        </div>
                        <div className="relative chart text-center">
                            <img
                                src={chart}
                                alt="Chart"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Salientfeatures
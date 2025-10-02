import React from "react";
import logo from '../../assets/images/logo.png'

export default function ViewAllSectors() {
    return (
        <div
            href="/sectors-in-uttar-pradesh/"
            className="hidden max-md:block rounded-lg mt-10 shadow-[0_19px_59px_0_rgba(150,150,150,0.44)] m-7 p-3 text-[1.5em] text-[#ff2242] min-h-[90px] font-bold text-center  border-2 border-dotted border-[#aeaeae]"
        >
            <img
                src={logo}
                alt="View All Sectors"
                className="w-[85px] mx-auto"
            />
            <small className="block text-[75%] text-[#8c8c8c] font-medium mt-2">
                View All
            </small>
            Sectors in Uttar Pradesh
        </div>
    );
}

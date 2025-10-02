import { useState } from 'react';
import { sectors } from '../../SectorData.js'

import logo from '../../assets/images/logo.png'

export default function SectorWheel({ onSelect, selectedId }) {
    const [rotation, setRotation] = useState(0);


    const handleSelect = (sector, index) => {
        onSelect(sector.id);
        console.log(sector.id, index, "dsjs")
        const sectorsCount = sectors.length;

        console.log(sectorsCount, "dsjs")
        const anglePerSector = 360 / sectorsCount;


        const targetAngle = 0 - (index * anglePerSector);

        setRotation(targetAngle);
    };


    console.log(rotation, "hasghdh")
    return (
        <svg
            className='Layer_1'
            viewBox="0 0 500 500"
        >
            {/* Rotating group */}
            <g 
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: "250px 250px",
                    transition: "transform 1s ease-in-out",
                }}
            >
                {sectors.map((sector, i) => {
                    const isActive = sector.id === selectedId;
                    return (
                        <g
                            key={sector.id}
                            className="cursor-pointer"
                            onClick={() => handleSelect(sector, i)}
                        >
                            <path
                                d={sector.path}
                                className="stroke-[#c8c8c8] stroke-[0.5px]"
                                style={{
                                    fill: isActive ? "rgb(239, 69, 99)" : "#ffffff",
                                }}
                            />
                            <text
                                transform={sector.textTransform}
                                className={`text-[10px] font-normal font-roboto-condensed  ${isActive ? "fill-white font-bold" : "fill-black"
                                    }`}
                                dx="-1rem"
                            >
                                {sector.title}
                            </text>
                        </g>
                    );
                })}
            </g>

            <svg viewBox="0 0 500 500">
                <defs>
                    <clipPath id="clipCircle">
                        <circle cx="250" cy="250" r="41.9" />
                    </clipPath>
                </defs>

                {/* Background Circle */}
                <circle cx="250" cy="250" r="41.9" fill="transparent" stroke='#ef45637d' stroke-width="2px" />

                {/* Image inside clip */}
                <image
                    href={logo}
                    x="230" y="225"
                    width="40"
                    height="30"
                    clipPath="url(#clipCircle)"
                    preserveAspectRatio="xMidYMid slice"
                />

                {/* Text */}
                <text x="247" y="270" style={{ fontSize: "5pt", fontWeight: "bold", fill: "#EF4563" }}>
                    ALL
                </text>
                <text x="227" y="280" style={{ fontSize: "8pt", fontWeight: "bold", letterSpacing: "2pt", fill: "#EF4563" }}>
                    SECTOR
                </text>
            </svg>

        </svg>
    )
}

import { sectors } from '../../SectorData.js'

export default function SectorWheel({ onSelect, selectedId }) {
    return (
        <svg viewBox="0 0 500 500" className="w-[500px] h-[500px] rotate-[-20deg]">
            {/* Rotate whole wheel */}
            <g transform="matrix(0.30902,0.95106,-0.95106,0.30902,410.49702,-65.10209)">
                {sectors.map((sector) => {
                    const isActive = sector.id === selectedId; // check active sector
                    return (
                        <g
                            key={sector.id}
                            className="cursor-pointer transition duration-200"
                            onClick={() => onSelect(sector.id)}
                        >
                            {/* Wheel slice */}
                            <path
                                d={sector.path}
                                className={`
                  stroke-gray-300 stroke-[0.5px] drop-shadow-md`}
                                style={{
                                    fill: isActive ? "rgb(239, 69, 99)" : "#ffffff",
                                }}
                            />

                            {/* Sector title */}
                            <text

                                transform={sector.textTransform}
                                className={`
                  text-[11px] font-medium transition 
                  ${isActive ? "fill-white font-bold" : "fill-black"}
                `}
                                textAnchor="middle"
                                alignmentBaseline="middle"
                            >
                                {sector.title}
                            </text>
                        </g>
                    )
                })}
            </g>

            {/* Center Circle */}
            <circle
                cx="250"
                cy="250"
                r="41.9"
                fill="hsl(var(--card))"
                stroke="hsl(var(--coral))"
                strokeWidth="2"
                className="drop-shadow-lg"
            />

            {/* Center text */}
            <text
                x="250"
                y="240"
                textAnchor="middle"
                fontSize="8"
                fontWeight="bold"
                fill="hsl(var(--coral))"
                letterSpacing="1px"
            >
                POWER UP
            </text>
            <text
                x="250"
                y="252"
                textAnchor="middle"
                fontSize="8"
                fontWeight="bold"
                fill="hsl(var(--coral))"
                letterSpacing="1px"
            >
                ALL
            </text>
            <text
                x="250"
                y="267"
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill="hsl(var(--primary))"
                letterSpacing="2px"
            >
                SECTOR
            </text>
        </svg>
    )
}

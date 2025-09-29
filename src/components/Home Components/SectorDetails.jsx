import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import { sectors } from '../../SectorData.js'




export default function SectorDetails({ selectedId }) {
  const sector = sectors.find((s) => s.id === selectedId);
  const swiperRef = useRef(null);
  
  if (!sector) {
    return (
      <div className="p-8 text-center bg-white rounded-lg">
        <p className="text-gray-500 text-lg">Click a sector to see details</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg ">
      {/* Header Section */}
      <div className="mb-6">
        <h5 className="sec-head">
          Sectors
        </h5>
        <h2 className="sector-head text-2xl font-bold mb-3">
          {sector.title}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {sector.description}
        </p>
      </div>

      <h4 className="text-xl font-semibold text-gray-800 mb-4">Sector Overview</h4>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image Carousel Section with Custom Navigation */}
        <div className="lg:w-5/12">
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="rounded-lg overflow-hidden"
          >
            {sector.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img 
                    src={img} 
                    alt={`${sector.title} ${index + 1}`} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <button 
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-10 h-10 flex items-center justify-center bg-[#f14857] text-white rounded-full hover:bg-[#d93c4a] transition-colors duration-200 shadow-md"
            >
              ←
            </button>
            <button 
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-10 h-10 flex items-center justify-center bg-[#f14857] text-white rounded-full hover:bg-[#d93c4a] transition-colors duration-200 shadow-md"
            >
              →
            </button>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="lg:w-7/12 keyfeature">
          <ul className="sector-key">
            {sector.keyFeatures.map((feature, index) => (
              <li 
                key={index}
                tabIndex="0"
              >
                <div className="text-box">
                  <h3>
                    <span>
                      {feature.highlight}
                    </span>
                  </h3>
                  <p>
                    {feature.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-6">
            <a
              href={sector.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sector"
            >
              {sector.cta.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const links = [
  { href: "https://www.india.gov.in/", img: "https://niveshmitra.up.nic.in/assets/Front/images/impu6.jpg" },
  { href: "https://www.nsws.gov.in/", img: "https://niveshmitra.up.nic.in/assets/Front/images/goup.jpg" },
  { href: "http://up.gov.in/", img: "https://niveshmitra.up.nic.in/assets/Front/images/imp7.jpg" },
  { href: "https://dpiit.gov.in/", img: "https://niveshmitra.up.nic.in/assets/Front/images/imp1.jpg" },
  { href: "https://www.investindia.gov.in/", img: "https://niveshmitra.up.nic.in/assets/Front/images/impu6.jpg" },
  { href: "https://www.g20.org/en/", img: "https://niveshmitra.up.nic.in/assets/Front/images/goup.jpg" },
  { href: "https://data.gov.in/", img: "https://niveshmitra.up.nic.in/assets/Front/images/imp7.jpg" },
  { href: "https://digitalindia.gov.in/", img: "https://niveshmitra.up.nic.in/assets/Front/images/imp1.jpg" },
  { href: "https://www.makeinindia.com/", img: "https://niveshmitra.up.nic.in/assets/Front/images/imp1.jpg" },
  { href: "https://www.mygov.in/", img: "https://niveshmitra.up.nic.in/assets/Front/images/imp1.jpg" },
  { href: "https://pmnrf.gov.in/en/", img: "https://niveshmitra.up.nic.in/assets/Front/images/imp1.jpg" },
];

const ImportantLinks = () => {
  return (
    <section className="p-10 mb-10">
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay]}
          navigation
          autoplay={{ delay: 2500 }}
          loop
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="implinkblock shadow-lg"
        >
          {links.map((link, index) => (
            <SwiperSlide key={index} style={{width:"229px"}} >
              <li className="list-none border-r border-dashed border-[#ccccccbd] p-4 bg-white">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={link.img}
                    alt={`Important Link ${index + 1}`}
                    className="w-full h-20 object-contain"
                  />
                </a>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImportantLinks;

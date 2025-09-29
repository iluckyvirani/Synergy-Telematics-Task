import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";   // if using navigation arrows
import "swiper/css/pagination";   // if using dots/pagination


import test1 from "../../assets/images/testi-1.jpg";
import test2 from "../../assets/images/testi-1.jpg";
import test3 from "../../assets/images/testi-1.jpg";

const testimonials = [
    {
        text: "“Portal is Easy to Navigate. Also, team of Nivesh Mitra is very supportive”",
        img: test1,
        name: "Adani Airport",
    },
    {
        text: "“It is an easy and smooth platform”",
        img: "https://niveshmitra.up.nic.in/assets/Front/images/testi-8.jpg",
        name: "DLF",
    },
    {
        text: "“Great support team, helped us every step of the way.”",
        img: test3,
        name: "Infosys",
    },
    {
        text: "“Great support team, helped us every step of the way.”",
        img: test3,
        name: "Infosys",
    },
];

const TestimonialCard = ({ text, img, name }) => {
    return (
        <div className="p-6 pb-0">
            <div className="w-[95%] text-center mx-auto">
                <h4
                    className="relative text-sm font-normal  leading-[23px] text-black  min-h-[200px] shadow-[0_-25px_0_-12px_#ededed,0_-50px_0_-23px_rgba(245,245,245,0.68)] p-12.5 rounded-md border border-[#f1f1f1] bg-no-repeat bg-cover bg-left-top backgroundimg" >
                    {text}
                </h4>
                <div className="testimonials-blob">

                </div>
                <div
                    className="relative w-20 h-20 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.11)] overflow-hidden mx-auto -translate-y-[60%]">
                    <img src={img} alt={name} className="w-20 h-20 object-cover" />
                </div>

                <div className="text-center font-bakbak text-[#00acee] text-[16px] font-normal">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonial = () => {
    return (
        <section className="relative pt-10 pb-20">
            <div className="container mx-auto px-3">
                {/* Title */}
                <div className='relative text-center title'>
                    <h2 className="font-bakbak text-center text-2xl md:text-3xl  text-[#1d113e] relative pb-6">
                        Testimonials
                    </h2>
                </div>

                {/* Swiper Carousel */}
                <div className="mt-5">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <TestimonialCard {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;

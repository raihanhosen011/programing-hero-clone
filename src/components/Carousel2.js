import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {EffectCoverflow,Pagination} from 'swiper/core';
  
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import ProjectCard from "./ProjectCard";

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);  

export default function Carousel2() {
  return (
    <>
      <div className='projects__carousel' >
      <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} spaceBetween={70} slidesPerView={3} coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
      }} pagination={true} className="mySwiper">
         <SwiperSlide><ProjectCard  image='https://web.programming-hero.com/public/1607430579419.png' /></SwiperSlide>
         <SwiperSlide><ProjectCard  image='https://web.programming-hero.com/public/1607430639533.png' /></SwiperSlide>
         <SwiperSlide><ProjectCard  image='https://web.programming-hero.com/public/1607430755490.png' /></SwiperSlide>
         <SwiperSlide><ProjectCard  image='https://web.programming-hero.com/public/1607430491834.png' /></SwiperSlide>
         <SwiperSlide><ProjectCard  image='https://web.programming-hero.com/public/1607430814808.png' /></SwiperSlide>
         <SwiperSlide><ProjectCard  image='https://web.programming-hero.com/public/1607430910532.png' /></SwiperSlide>
         <SwiperSlide><ProjectCard  image='https://web.programming-hero.com/public/1607431183893.png' /></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

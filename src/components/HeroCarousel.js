import React from "react";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import HeroCard from "./HeroCard";
  

SwiperCore.use([EffectCoverflow,Pagination]);

export default function HeroCarousel() {
    return (
        <div className='hero_carousel' >
          <Swiper spaceBetween={30} Autoplay={true} slidesPerView={1} pagination={true} className="mySwiper">
            <SwiperSlide><HeroCard img='https://web.programming-hero.com/public/1622955725643.png' tittle='Got stuck? We will always be there for you.' /></SwiperSlide>
            <SwiperSlide><HeroCard img='https://web.programming-hero.com/public/1622955835022.png' tittle='Learn Effectively that will take you towards your goal' /></SwiperSlide>
            <SwiperSlide><HeroCard img='https://web.programming-hero.com/public/1622956051167.png' tittle='Complete Web Development Course with Jhankar Mahbub' /></SwiperSlide>
            <SwiperSlide><HeroCard img='https://web.programming-hero.com/public/1622956144372.png' tittle='Build 11 professional projects while learning.' /></SwiperSlide>
            <SwiperSlide><HeroCard img='https://web.programming-hero.com/public/1622955529676.png' tittle='We will ensure our graduates are world-class web' /></SwiperSlide>
            <SwiperSlide><HeroCard img='https://web.programming-hero.com/public/1622956286239.png' tittle='Start your dream today. Conquer the world.' /></SwiperSlide>
          </Swiper>  
        </div>
    )
}

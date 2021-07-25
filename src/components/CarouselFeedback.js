import React from "react";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import FeedbackCard from '../components/FeedbackCard';
  
SwiperCore.use([EffectCoverflow,Pagination]);

export default function CarouselFeedback() {
  return (
    <>
      <div className='carousel__wrapper' >
        <Swiper spaceBetween={30} Autoplay={true} slidesPerView={2} pagination={true} className="mySwiper">
            <SwiperSlide><FeedbackCard img='https://web.programming-hero.com/public/1607514893241.png' desc='This course has found out my passion, taught me time management, taught me how to come out from procrastination, taught me teamwork, and has given me an opportunity to meet with awesome mentors and mates. I am so grateful to Programming Hero. Thanks, Programming Hero. ❤' /></SwiperSlide>
            <SwiperSlide><FeedbackCard img='https://web.programming-hero.com/public/1607515334550.jpg' desc='This course has found out my passion, taught me time management, taught me how to come out from procrastination, taught me teamwork, and has given me an opportunity to meet with awesome mentors and mates. I am so grateful to Programming Hero. Thanks, Programming Hero. ❤' /></SwiperSlide>
            <SwiperSlide><FeedbackCard img='https://web.programming-hero.com/public/1607515936121.jpg' desc='This course has found out my passion, taught me time management, taught me how to come out from procrastination, taught me teamwork, and has given me an opportunity to meet with awesome mentors and mates. I am so grateful to Programming Hero. Thanks, Programming Hero. ❤' /></SwiperSlide>
            <SwiperSlide><FeedbackCard img='https://web.programming-hero.com/public/1607516091354.jpg' desc='This course has found out my passion, taught me time management, taught me how to come out from procrastination, taught me teamwork, and has given me an opportunity to meet with awesome mentors and mates. I am so grateful to Programming Hero. Thanks, Programming Hero. ❤' /></SwiperSlide>
            <SwiperSlide><FeedbackCard img='https://web.programming-hero.com/public/1607516252673.jpg' desc='This course has found out my passion, taught me time management, taught me how to come out from procrastination, taught me teamwork, and has given me an opportunity to meet with awesome mentors and mates. I am so grateful to Programming Hero. Thanks, Programming Hero. ❤' /></SwiperSlide>
            <SwiperSlide><FeedbackCard img='https://web.programming-hero.com/public/1607516351748.jpg' desc='This course has found out my passion, taught me time management, taught me how to come out from procrastination, taught me teamwork, and has given me an opportunity to meet with awesome mentors and mates. I am so grateful to Programming Hero. Thanks, Programming Hero. ❤' /></SwiperSlide>
            <SwiperSlide><FeedbackCard img='https://web.programming-hero.com/public/1607516750055.jpg' desc='This course has found out my passion, taught me time management, taught me how to come out from procrastination, taught me teamwork, and has given me an opportunity to meet with awesome mentors and mates. I am so grateful to Programming Hero. Thanks, Programming Hero. ❤' /></SwiperSlide>
            <SwiperSlide><FeedbackCard img='https://web.programming-hero.com/public/1607516912860.png' desc='This course has found out my passion, taught me time management, taught me how to come out from procrastination, taught me teamwork, and has given me an opportunity to meet with awesome mentors and mates. I am so grateful to Programming Hero. Thanks, Programming Hero. ❤' /></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

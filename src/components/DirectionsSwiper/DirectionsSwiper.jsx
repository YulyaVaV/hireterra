import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './DirectionsSwiper.scss';

import { directions } from './directions.jsx';
import DirectionsCard from "./DirectionsCard/DirectionsCard";


import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

export const DirectionsSwiper = () => {
  return (
    <>
    <Swiper
      freeMode={true}
      navigation={true}
      pagination={{
        clickable: true
      }}
      breakpoints={{
        1280: {
          slidesPerView: 3.5
        },
        1035: {
          slidesPerView: 3.2
        },
        980: {
          slidesPerView: 2.8
        },
        820: {
          slidesPerView: 2.5
        },
        680: {
          slidesPerView: 2
        },
        600: {
          slidesPerView: 1.8
        },
        520: {
          slidesPerView: 1.5
        },
        450: {
          slidesPerView: 1.3
        },
        400: {
          slidesPerView: 1.4
        },
        350: {
          slidesPerView: 1.5
        },
      }}
      modules={[FreeMode, Pagination]}
      className="directions-swiper"
    >
      {
        directions.map(item => (
          <SwiperSlide>
            <DirectionsCard
              title={item.title}
              img={item.img}
              sub1={item.sub1}
              sub2={item.sub2}
              sub3={item.sub3}
              sub4={item.sub4}
              sub5={item.sub5}
              symbol={item.symbol}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
    </>
  )
};

import React from "react";
import './HRecruitersSwiper.scss'
import HRecruitersCard from "../HRecruitersCard/HRecruitersCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

export const HRecruitersSwiper = ({hrecruiters}) => {
  return (
    <>
    <Swiper
      spaceBetween={50}
      freeMode={true}
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      breakpoints={{
        1760: {
          slidesPerView: 2.5
        },
        1640: {
          slidesPerView: 2.2
        },
        1360: {
          slidesPerView: 1.5
        },
        1110: {
          slidesPerView: 1.4
        },
        990: {
          slidesPerView: 1.2
        },
        880: {
          slidesPerView: 1.1
        },
        730: {
          slidesPerView: 1.6
        },
        570: {
          slidesPerView: 1.2
        },
        490: {
          slidesPerView: 1
        },
        430: {
          slidesPerView: 0.8
        },
        320: {
          slidesPerView: 1
        },
      }}
      className="hrecruiters-swiper"
    >
      {
        hrecruiters.map(item => (
          <SwiperSlide>
            <HRecruitersCard
              img={item.img}
              name={item.name}
              company={item.company}
              position={item.position}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
    </>
  )
};
import React from "react";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import './TestimonialsSwiper.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

export const TestimonialsSwiper = ({testimonials})  => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        slidesPerView={3}
        navigation={true}
        modules={[FreeMode, Pagination]}
        className="testimonials-swiper"
        breakpoints={{
          1280: {
            slidesPerView: 3.4
          },
          1155: {
            slidesPerView: 2
          },
          1000: {
            slidesPerView: 1.7
          },
          820: {
            slidesPerView: 1.8
          },
          600: {
            slidesPerView: 1.3
          },
          530: {
            slidesPerView: 1.2
          },
          300: {
            slidesPerView: 1
          }
        }}
      >
      {
        testimonials.map(item => (
          <SwiperSlide>
            <TestimonialsCard
              img={item.img}
              name={item.name}
              position={item.position}
              descr={item.descr}
            />
          </SwiperSlide>
        ))
      }
      </Swiper>
    </>
  );
}

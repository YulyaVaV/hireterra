import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './SpecificsSwiper.scss';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import SpecificsGivesCard from "../SpecificsGivesCard/SpecificsGivesCard";

SwiperCore.use([Navigation, Pagination]);

export const SpecificsSwiper = ({gives}) => {
  return (
    <>
    <Swiper
      slidesPerView={"auto"}
      navigation={true}
      pagination={{clickable: true}}
      className="specifics-swiper"
    >
      {
        gives.map(item => (
          <SwiperSlide>
            <SpecificsGivesCard
              title={item.title}
              descr={item.descr}
              gives={item.gives}
              subtitle={item.subtitle}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
    </>
  )
};

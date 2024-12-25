import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Cards } from "../cards";

import "swiper/css";
import "swiper/css/pagination";

const SwiperPortofolio = () => {
  return (
    <Swiper
      initialSlide={1}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      }}
      spaceBetween={30}
      centeredSlides={true}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: -50,
          initialSlide: 3,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Cards.CardCertificate />
      </SwiperSlide>
      <SwiperSlide>
        <Cards.CardCertificate />
      </SwiperSlide>
      <SwiperSlide>
        <Cards.CardCertificate />
      </SwiperSlide>
      <SwiperSlide>
        <Cards.CardCertificate />
      </SwiperSlide>
      <SwiperSlide>
        <Cards.CardCertificate />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperPortofolio;

import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Cards } from "../cards";

import "swiper/css";
import "swiper/css/pagination";
import { certificates } from "@/data/certificate";

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
      {certificates.map((ctf) => (
        <SwiperSlide key={ctf.id}>
          <Cards.CardCertificate
            title={ctf.title}
            author={ctf.author}
            code={ctf.code_licence}
            image={ctf.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperPortofolio;

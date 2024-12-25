import React from "react";
import { Cards } from "../ui/cards";
import SwiperPortofolio from "../ui/swiper/swiper";

const Certificates = () => {
  return (
    <div className="mt-48 mb-64">
      <div className="text-center mb-14">
        <h2 className="text-[#14A7EA] font-semibold text-[28px] ">
          My Certificates
        </h2>
      </div>
      <SwiperPortofolio />
    </div>
  );
};

export default Certificates;

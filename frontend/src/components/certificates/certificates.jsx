import React from "react";
import SwiperPortofolio from "../ui/swiper/swiper";
import TitleWithSub from "../ui/title";

const Certificates = () => {
  return (
    <div className="mt-48 mb-64">
      <TitleWithSub title={"Certificates"} />
      <SwiperPortofolio />
    </div>
  );
};

export default Certificates;

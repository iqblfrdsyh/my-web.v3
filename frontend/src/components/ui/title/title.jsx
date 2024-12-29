import React from "react";

const TitleWithSub = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-[#56c9ff] font-semibold  text-[28px] pb-2 tracking-[1px]">
        {title}
      </h2>
      <p className="opacity-85 font-medium text-[18px]">
        {subtitle && subtitle}
      </p>
    </div>
  );
};

export default TitleWithSub;

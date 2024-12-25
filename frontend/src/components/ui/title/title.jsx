import React from "react";

const TitleWithSub = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-[#14A7EA] font-semibold  text-[28px] pb-2 tracking-[1px]">
        {title}
      </h2>
      <p className="opacity-50 font-medium text-[18px]">{subtitle}</p>
    </div>
  );
};

export default TitleWithSub;

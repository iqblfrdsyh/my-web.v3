import { certificates } from "@/data/certificate";
import { projects } from "@/data/projects";
import React from "react";

const Statistics = () => {
  return (
    <div className="flex items-center gap-8 sm:gap-14">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-[28px] font-semibold tracking-[1px]">3.5</h3>
        <p className="font-semibold tracking-[1px]">year experience</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-[28px] font-semibold tracking-[1px]">
          {projects.length}
        </h3>
        <p className="font-semibold tracking-[1px]">projects</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-[28px] font-semibold tracking-[1px]">{certificates.length}</h3>
        <p className="font-semibold tracking-[1px]">certificates</p>
      </div>
    </div>
  );
};

export default Statistics;

"use client";

import Chart from "@/components/admin/chart/chart";
import StatCard from "@/components/admin/stat-card/stat-card";
import React from "react";
import { FaBriefcase, FaTrophy, FaEnvelope, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  const statsData = [
    { title: "Total Projects", value: "12", icon: FaBriefcase },
    { title: "Total Skills", value: "25", icon: FaTrophy },
    { title: "Messages", value: "8", icon: FaEnvelope },
    { title: "Active Now", value: "573", icon: FaChartLine },
  ];

  return (
    <div className="mt-10 sm:mx-10">
      <h1 className="absolute top-2 left-14 text-[23px] font-semibold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-5">
        {statsData.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
      <div>
        <h2 className="text-[23px] font-semibold mt-3">Overview</h2>
        <div className="-ml-10 mt-5">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

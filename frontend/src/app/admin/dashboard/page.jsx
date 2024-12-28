"use client";

import AdminLayout from "@/components/layouts/adminLayout/admin.layout";
import Chart from "@/components/ui/admin/chart/chart";
import StatCard from "@/components/ui/admin/stat-card/stat-card";
import React from "react";
import { FaBriefcase, FaCode, FaChartLine } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

const Dashboard = () => {
  const statsData = [
    { title: "Total Projects", value: "12", icon: FaBriefcase },
    { title: "Total Skills", value: "12", icon: FaCode },
    { title: "Total Certificates", value: "20", icon: PiCertificateFill },
    { title: "Total View", value: "8", icon: FaChartLine },
  ];

  return (
    <AdminLayout title={"Dashboard"}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-7">
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
    </AdminLayout>
  );
};

export default Dashboard;

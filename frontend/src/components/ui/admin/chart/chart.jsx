import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", overview: 10 },
  { month: "Feb", overview: 5 },
  { month: "Mar", overview: 15 },
  { month: "Apr", overview: 3 },
  { month: "May", overview: 5 },
  { month: "Jun", overview: 12 },
  { month: "Jul", overview: 0 },
  { month: "Aug", overview: 1 },
  { month: "Sept", overview: 2 },
  { month: "Oct", overview: 6 },
  { month: "Nov", overview: 25 },
  { month: "Dec", overview: 8 },
];
const Chart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer style={{ width: "100%", height: "100%" }}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="overview" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

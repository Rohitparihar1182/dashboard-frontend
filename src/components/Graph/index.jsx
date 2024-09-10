
import React from "react";
import { FiUser } from "react-icons/fi";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";

const data = [
  {
    name: "Jan",
    Returning: 275,
    New: 41,
    Churned: 30,
  },
  {
    name: "Feb",
    Returning: 620,
    New: 96,
    Churned: 45,
  },
  {
    name: "Mar",
    Returning: 202,
    New: 192,
    Churned: 60,
  },
  {
    name: "Apr",
    Returning: 500,
    New: 50,
    Churned: 40,
  },
  {
    name: "May",
    Returning: 355,
    New: 400,
    Churned: 80,
  },
  {
    name: "Jun",
    Returning: 875,
    New: 200,
    Churned: 120,
  },
  {
    name: "Jul",
    Returning: 700,
    New: 205,
    Churned: 95,
  },
];


export const ActivityGraph = () => {
  return (
    <div className="overflow-hidden rounded ">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Activity
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: -24,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke="#e4e4e7" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              className="text-xs font-bold"
              padding={{ right: 4 }}
            />
            <YAxis
              className="text-xs font-bold"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-stone-500"
            />
            <Line
              type="monotone"
              dataKey="New"
              stroke="rgba(75, 192, 192)"
              fill="rgba(75, 192, 192)"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Returning"
              stroke="rgba(255, 159, 64, 1)"
              fill="rgba(255, 159, 64, 1)"
            />
            <Line
              type="monotone"
              dataKey="Churned"
              stroke="rgba(153, 102, 255, 1)"
              fill="rgba(153, 102, 255, 1)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
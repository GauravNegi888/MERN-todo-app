import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-lg bg-white px-2 py-1 sm:px-3 sm:py-2 shadow-md">
        <p className="text-xs sm:text-sm font-medium">
          {payload[0].value}T
        </p>
      </div>
    );
  }

  return null;
};

export default function ProductivityChart({ data }) {
  return (
    <div className="h-full w-full rounded-3xl bg-zinc-100 p-3 sm:p-4 md:p-5 lg:p-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            stroke="#d4d4d8"
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            tick={{ fontSize: 12 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
            content={<CustomTooltip />}
          />

          <Bar
            dataKey="tasks"
            fill="#18181b"
            radius={[8, 8, 0, 0]}
            maxBarSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", hours: 0 },
  { day: "Tue", hours: 1.5 },
  { day: "Wed", hours: 2.5 },
  { day: "Thu", hours: 1 },
  { day: "Fri", hours: 4 },
  { day: "Sat", hours: 3 },
  { day: "Sun", hours: 2 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-lg bg-white px-3 py-2 shadow-md">
        <p className="font-medium">{payload[0].value}h</p>
      </div>
    );
  }

  return null;
};

export default function ProductivityChart() {
  return (
    <div className="h-full w-full rounded-3xl bg-zinc-100 p-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 10,
            bottom: 10,
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
            tickMargin={12}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={12}
          />

          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
            content={<CustomTooltip />}
          />

          <Bar
            dataKey="hours"
            fill="#18181b"
            radius={[8, 8, 0, 0]}
            barSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
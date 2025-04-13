import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const students = [
  { name: "Arefin", math: 85, physics: 78, chemistry: 90 },
  { name: "Fatema", math: 92, physics: 88, chemistry: 95 },
  { name: "Tanvir", math: 75, physics: 80, chemistry: 70 },
  { name: "Mim", math: 68, physics: 72, chemistry: 65 },
  { name: "Shuvo", math: 88, physics: 85, chemistry: 80 },
  { name: "Rafi", math: 79, physics: 76, chemistry: 83 },
  { name: "Nipa", math: 91, physics: 90, chemistry: 89 },
  { name: "Rumi", math: 64, physics: 70, chemistry: 60 },
  { name: "Sifat", math: 98, physics: 95, chemistry: 94 },
  { name: "Jannat", math: 82, physics: 79, chemistry: 88 },
];
students.map((student) => {
  const avgs = (student.math + student.chemistry + student.physics) / 3;
  return (student.avg = Math.round(avgs));
});

const Chart = () => {
  return (
    <div className="mt-40 mx-auto -z-30 ">
      <LineChart height={300} width={700} data={students}>
        <Line type={"monotone"} dataKey="avg" stroke="black" />
        <XAxis dataKey="name" stroke="black"></XAxis>
        <YAxis stroke="black" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart;

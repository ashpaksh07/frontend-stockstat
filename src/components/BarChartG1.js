import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const BarChartG1 = (props) => {
  const data = [
    {
      name: "Total Transfer",
      uv: props.data.total_amount_added,
    },
    {
      name: "Bank Transfer",
      uv: props.data.bank_transfer,
    },
    {
      name: "UPI Transfer",
      uv: props.data.upi_transfer,
    },
    {
      name: "Other Modes",
      uv: props.data.other_mode_transfer,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <BarChart
      width={800}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar
        dataKey="uv"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={"#00C49F"} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default BarChartG1;

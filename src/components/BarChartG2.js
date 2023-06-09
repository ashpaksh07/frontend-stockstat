import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { Box } from "@mui/material";

const BarChartG2 = (props) => {
  const data = [
    {
      name: "F&O Profit / Loss",
      uv: props.data.fno_pnl,
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
    <>
      <Box sx={{ display: { xs: "none", sm: "block" }, mr: 5 }}>
        <BarChart
          width={350}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
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
              <Cell
                key={`cell-${index}`}
                fill={props.data.fno_pnl > 0 ? "#00C49F" : "#FA5F55"}
              />
            ))}
          </Bar>
        </BarChart>
      </Box>

      {/* <<<<<<<<<<<<< mobile view starts here >>>>>>>>>>>>>> */}
      <Box sx={{ display: { xs: "block", sm: "none" }, mr: 5 }}>
        <BarChart
          width={350}
          height={210}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            style={{
              fontSize: "8px",
            }}
          />
          <YAxis
            style={{
              fontSize: "8px",
            }}
          />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={props.data.fno_pnl > 0 ? "#00C49F" : "#FA5F55"}
              />
            ))}
          </Bar>
        </BarChart>
      </Box>
    </>
  );
};

export default BarChartG2;

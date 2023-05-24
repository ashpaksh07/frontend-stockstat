import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Box } from "@mui/material";

const PieChartG3 = (props) => {
  const data = [
    { name: "Payout / Withdrawal", value: props.data.payout },
    {
      name: "Quarterly Settlement by Zerodha",
      value: props.data.quarterly_settlement,
    },
  ];
  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" }, mr: 5 }}>
        <Box
          display="grid"
          backgroundColor="#f3f3f3"
          gridTemplateColumns="repeat(4, 1fr)"
          gridAutoRows="26px"
          gap="15px"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: 3 }}
        >
          <Box
            gridColumn="span 2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingLeft="130px"
          >
            <PieChart width={1000} height={600}>
              <Pie
                dataKey="value"
                data={data}
                innerRadius={80}
                outerRadius={110}
                fill="#82ca9d"
                paddingAngle={0.5}
                title="Amount "
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Box>
          <Box
            gridColumn="span 2"
            display="flex"
            paddingLeft="40px"
            paddingRight="10px"
          >
            <div className="graphthreetext">
              <Box display="inline-flex">
                <Box
                  backgroundColor="#0088FE"
                  marginRight="10px"
                  height="12px"
                  width="12px"
                  marginTop="3px"
                ></Box>
                Payout / Withdrawal
              </Box>
              <Box display="inline-flex">
                <Box
                  backgroundColor="#00C49F"
                  marginRight="10px"
                  height="12px"
                  width="12px"
                  marginTop="3px"
                ></Box>
                Quarterly Settlement by Zerodha
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
      {/* <<<<<<<<<<<<< mobile view starts here >>>>>>>>>>>>>> */}
      <Box sx={{ display: { xs: "block", sm: "none" }, mr: 0.5 }}>
        <Box
          display="grid"
          backgroundColor="#f3f3f3"
          gridTemplateColumns="repeat(4, 1fr)"
          gridAutoRows="26px"
          gap="15px"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: 3 }}
        >
          <Box
            gridColumn="span 2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingLeft="30px"
          >
            <PieChart width={500} height={300}>
              <Pie
                dataKey="value"
                data={data}
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                paddingAngle={0.5}
                title="Amount "
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Box>
          <Box
            gridColumn="span 2"
            display="flex"
            paddingLeft="20px"
            paddingRight="1px"
          >
            <div className="graphthreetext">
              <Box display="inline-flex">
                <Box
                  backgroundColor="#0088FE"
                  marginRight="10px"
                  height="12px"
                  width="12px"
                ></Box>
                Payout / Withdrawal : Rs. {props.data.payout}
              </Box>
              <Box display="inline-flex">
                <Box
                  backgroundColor="#00C49F"
                  marginRight="10px"
                  height="12px"
                  width="12px"
                ></Box>
                Quarterly Settlement by Zerodha : Rs.{" "}
                {props.data.quarterly_settlement}
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PieChartG3;

import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Box } from "@mui/material";

const PieChartG4 = (props) => {
  const data = [
    {
      name: "DP Charges for sale of stock",
      value: props.data.long_term_sell_charge,
    },
    { name: "Call and Trade charges", value: props.data.intraday_charges },
    {
      name: "Account maintenance charges",
      value: props.data.account_maintenance_charges,
    },
    {
      name: "Being payment gateway charges",
      value: props.data.being_payment_gateway_charges,
    },
    { name: "Being fee for smallcase", value: props.data.smallcase_charges },
    {
      name: "Kite Connect API Charges",
      value: props.data.kite_connect_charges,
    },
    { name: "Streak Monthly Subscription", value: props.data.streak_charges },
    {
      name: "Delayed payment charges",
      value: props.data.payment_delay_charges,
    },
    { name: "Securities Transaction Tax", value: props.data.security_tax },
    { name: "Stamp Duty", value: props.data.stamp_duty },
    {
      name: "MF Redemption credit for Nippon ETF LiqBeES",
      value: props.data.mf_redemption,
    },
  ];
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#000066",
    "#003366",
    "#006666",
    "#333366",
    "#339966",
    "#663366",
    "#993366",
  ];

  return (
    <div>
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
              {data[0].name}
            </Box>
            <Box display="inline-flex">
              <Box
                backgroundColor="#00C49F"
                marginRight="10px"
                height="12px"
                width="12px"
                marginTop="3px"
              ></Box>
              {data[1].name}
            </Box>
            <Box display="inline-flex">
              <Box
                backgroundColor="#FFBB28"
                marginRight="10px"
                height="12px"
                width="12px"
                marginTop="3px"
              ></Box>
              {data[2].name}
            </Box>
            <Box display="inline-flex">
              <Box
                backgroundColor="#FF8042"
                marginRight="10px"
                height="12px"
                width="12px"
                marginTop="3px"
              ></Box>
              {data[3].name}
            </Box>
            <Box display="inline-flex">
              <Box
                backgroundColor="#000066"
                marginRight="10px"
                height="12px"
                width="12px"
                marginTop="3px"
              ></Box>
              {data[4].name}
            </Box>
            <Box display="inline-flex">
              <Box
                backgroundColor="#003366"
                marginRight="10px"
                height="12px"
                width="12px"
                marginTop="3px"
              ></Box>
              {data[5].name}
            </Box>
            <Box display="inline-flex">
              <Box
                backgroundColor="#006666"
                marginRight="10px"
                height="12px"
                width="12px"
                marginTop="3px"
              ></Box>
              {data[6].name}
            </Box>
            <Box display="inline-flex">
              <Box
                backgroundColor="#333366"
                marginRight="10px"
                height="12px"
                width="12px"
                marginTop="3px"
              ></Box>
              {data[7].name}
            </Box>
            <Box display="inline-flex">
              <Box
                backgroundColor="#339966"
                marginRight="10px"
                height="12px"
                width="12px"
                marginTop="3px"
              ></Box>
              {data[8].name}
            </Box>
            <Box display="inline-flex">
              <Box
                backgroundColor="#663366"
                marginRight="10px"
                height="12px"
                width="12px"
                marginTop="3px"
              ></Box>
              {data[9].name}
            </Box>
            <Box display="inline-flex">
              <Box
                backgroundColor="#993366"
                marginRight="10px"
                height="12px"
                width="12px"
                marginTop="3px"
              ></Box>
              {data[10].name}
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default PieChartG4;

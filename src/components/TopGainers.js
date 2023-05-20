import React from "react";
import { Box } from "@mui/material";

const TopGainers = () => {
  return (
    <Box
      gridColumn="span 4"
      backgroundColor="#f3f3f3"
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gridAutoRows="20px"
      gap="15px"
      alignItems="center"
      justifyContent="center"
      sx={{ borderRadius: 3 }}
    >
      {/* Row 1 */}
      <Box
        gridColumn="span 2"
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingTop="30px"
      >
        <div className="statclass">
          <h4>Top 5 Gainers</h4>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <p>Stock </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <p>Profit </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <p>TATA Chem </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass profitnum">
          <h4>Rs. 12,000 </h4>
        </div>
      </Box>
      {/* Row 2 */}
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <p>Hindustan Unilever </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass profitnum">
          <h4>Rs. 11,200 </h4>
        </div>
      </Box>
      {/* Row 3 */}
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <p>TTMS </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass profitnum">
          <h4>Rs. 10,900 </h4>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <p>TATA Steel </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass profitnum">
          <h4>Rs. 10,000 </h4>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <p>TATA Consumer </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass profitnum">
          <h4>Rs. 9,000 </h4>
        </div>
      </Box>
    </Box>
  );
};

export default TopGainers;

import React from 'react';
import { Box } from '@mui/material'

const Statistic = () => {
    return (
      <Box
      gridColumn="span 4"
      backgroundColor="#f3f3f3"
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gridAutoRows="26px"
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
          <h4>Statistics</h4>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <p>Profit / Loss (Equity) </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <h4>Rs. 66,000 </h4>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        
      >
        <div className="statclass">
          <p>Reurn in % (Equity) </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        
      >
        <div className="statclass">
          <h4>11% </h4>
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
          <p>Profit / Loss (FnO) </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <h4>Rs. -11,200 </h4>
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
          <p>Reurn in % (FnO) </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <h4>-40% </h4>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <p>Broker Charges </p>
        </div>
      </Box>
      <Box
        gridColumn="span 1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="statclass">
          <h4>Rs. 14,597 </h4>
        </div>
      </Box>
    </Box>
    )
}

export default Statistic

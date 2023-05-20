import React from 'react';
import { Box } from '@mui/material';

const TopLosers = () => {
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
              <h4>Top 5 Losers</h4>
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
              <p>Loss </p>
            </div>
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <div className="statclass">
              <p>DMart </p>
            </div>
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <div className="statclass lossnum">
              <h4>Rs. -12,000 </h4>
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
              <p>BPCL </p>
            </div>
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <div className="statclass lossnum">
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
              <p>IEX </p>
            </div>
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            
          >
            <div className="statclass lossnum">
              <h4>Rs. -10,900 </h4>
            </div>
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <div className="statclass">
              <p>TCS </p>
            </div>
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <div className="statclass lossnum">
              <h4>Rs. -10,000 </h4>
            </div>
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <div className="statclass">
              <p>Wipro </p>
            </div>
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <div className="statclass lossnum">
              <h4>Rs. -9,000 </h4>
            </div>
          </Box>
        </Box>
    )
}

export default TopLosers

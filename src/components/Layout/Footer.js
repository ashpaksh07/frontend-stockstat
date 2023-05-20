import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <>
        
            <Box sx={{textAlign: 'center', bgcolor: '#505050', color: 'white', p: 1}}>
                <Box sx = {{
                    my : 3,
                    "& svg" : {
                        fontSize: "40px",
                        cursor: "pointer",
                        mr: 2,
                    },

                    "& svg:hover": {
                        color: "#298BEA",
                        transform: 'translateX(5px)',
                        transition: "all 400ms"
                    }
                }}>
                    {/* icons */}
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                </Box>
                <Typography variant = 'h6' sx = {{ marginBottom: 2, "@media (max-width:600px)": {
                    fontSize: "1rem",
                },
                }}>
                    All rights reserved &copy; StockStat
                </Typography>
            </Box>

        </>
    )
}

export default Footer

import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Contact = () => {
    return (
        <Layout>
            <Box sx = {{mt:10, mb: 7, ml: 10, "& h5": {
                fontWeight: 'bold', mb: 2
            } }}>
                <Typography variant = "h5" color = "#505050">
                    Contact Us:
                </Typography>
            </Box>
            <Box sx = {{ m: 3, ml: 10, mr: 10, 
                "@media (max-width:600px)":{
                    ml: 5,
                    mr: 5,
                    width: '250px'
                }
            }} >
                <TableContainer component = {Paper}>
                    <Table aria-label = "contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx = {{bgcolor: "#505050", color: "white"}}
                                align = 'center'>
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx = {{color: "#298BEA", pt: 1}}/> ashpaksh7@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <InstagramIcon sx = {{color: "#298BEA", pt: 1}}/> @iam_ashpak
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx = {{color: "#298BEA", pt: 1}}/> ashpaksh7@gmail.com
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact

import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ContactImage from "../images/contact.png";

const Contact = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={6}>
          <div
            className="contactimage"
            style={{ backgroundImage: `url(${ContactImage})` }}
          ></div>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              mt: 17,
              mb: 4,
              ml: 10,
              "& h5": {
                fontWeight: "bold",
                mb: 2,
              },
            }}
          >
            <Typography variant="h5" color="#505050">
              Contact Us
            </Typography>
          </Box>
          <Box
            sx={{
              ml: 10,
              mr: 10,
              "@media (max-width:600px)": {
                ml: 5,
                mr: 5,
                width: "250px",
              },
            }}
          >
            <TableContainer component={Paper}>
              <Table aria-label="contact table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ bgcolor: "#505050", color: "white" }}
                      align="center"
                    >
                      Contact Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <EmailIcon sx={{ color: "#298BEA", pt: 1 }} />{" "}
                      ashpaksh7@gmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <InstagramIcon sx={{ color: "#298BEA", pt: 1 }} />{" "}
                      @iam_ashpak
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <SupportAgentIcon sx={{ color: "#298BEA", pt: 1 }} />{" "}
                      ashpaksh7@gmail.com
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;

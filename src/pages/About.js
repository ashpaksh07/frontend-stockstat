import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography, Grid } from "@mui/material";
import AboutUsImage from "../images/about-us.png";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          mr: 9,
          ml: 8,
          textAlign: "center",

          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.3rem",
            },
          },
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Box color="#505050" marginTop="180px">
              <Typography variant="h4">About us</Typography>
              <p>
                We at StockStat analyse your pnl book and simplify it so that
                users can understand how much money they have added in Zerodha
                till now. Zerodha will show you only current value and currently
                invested amount. But, we might have done profit and loss.
                Zerodha ignored this profit and loss by showing just current
                investment. But do not worry, StockStat is there for your help.
              </p>{" "}
              <br />
              <p>
                StockStat will take the csv file and analyse it to find out
                total money you have added in Zerodha? How much charges and what
                kind of charges Zerodha have deducted from you? And How much
                profit or loss you have done in Futures and Options. Please let
                us know if you have any feedback for this site on
                ashpaksh07@gmail.com.
              </p>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <div
              className="aboutusimage"
              style={{ backgroundImage: `url(${AboutUsImage})` }}
            ></div>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default About;

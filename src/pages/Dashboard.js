import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Toolbar, Button, Skeleton } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import DashboardStyles from "../styles/DashboardStyles.css";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import BarChartG1 from "../components/BarChartG1";
import BarChartG2 from "../components/BarChartG2";
import PieChartG3 from "../components/PieChartG3";
import PieChartG4 from "../components/PieChartG4";
import { useLocation, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Dashboard = () => {
  const location = useLocation();
  return (
    <Layout>
      <Toolbar />

      <Box
        bgcolor="#f3f3f3"
        sx={{ display: "inline-flex", ml: 9, borderRadius: 3 }}
      >
        <div>
          <WorkIcon
            sx={{ ml: 2.4, mt: 1.5, color: "#808080", fontSize: "65px" }}
          />
        </div>
        <div className="paraText">
          <p>Total amount added till date:</p>
          <h2>
            {location.state.total_amount ? (
              location.state.total_amount
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "30px" }} />
            )}
          </h2>
        </div>

        <div className="uploadButtonClass">
          <HashLink to="/#actiondivid">
            <Button sx={{ textTransform: "none" }}>
              <CloudUploadOutlinedIcon sx={{ mr: "10px", fontSize: 22 }} />
              Upload Latest csv
            </Button>
          </HashLink>
        </div>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="350px"
        gap="20px"
        marginLeft="73px"
        marginRight="75px"
        marginTop="20px"
        marginBottom="20px"
      >
        <Box
          gridColumn="span 8"
          backgroundColor="#f3f3f3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: 3 }}
        >
          <div className="statclass">
            {location.state ? (
              <BarChartG1 data={location.state} />
            ) : (
              <Skeleton variant="rounded" width={750} height={280} />
            )}
          </div>
        </Box>

        <Box
          gridColumn="span 4"
          backgroundColor="#f3f3f3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: 3 }}
        >
          <div className="statclass">
            {location.state ? (
              <BarChartG2 data={location.state} />
            ) : (
              <Skeleton variant="rounded" width={350} height={280} />
            )}
          </div>
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor="#f3f3f3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: 3 }}
        >
          <div className="statclass">
            {location.state ? (
              <PieChartG3 data={location.state} />
            ) : (
              <Skeleton variant="rounded" width={530} height={280} />
            )}
          </div>
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor="#f3f3f3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: 3 }}
        >
          <div className="statclass">
            {location.state ? (
              <PieChartG4 data={location.state} />
            ) : (
              <Skeleton variant="rounded" width={530} height={280} />
            )}
          </div>
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;

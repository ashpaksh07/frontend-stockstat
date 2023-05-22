import React, { useState, useRef } from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../images/banner2.png";
import ActionBanner from "../images/action-banner.svg";
import HomeStyle from "../styles/HomeStyle.css";
import Grid from "@mui/material/Grid";
import { Box, Tabs, Tab, Button, Alert, LinearProgress } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Papa from "papaparse";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [loading, setLoading] = React.useState(false);
  const ref = useRef(null);

  const apiUrl =
    "https://backend-stockstat-443-33yyspgzpa-as.a.run.app/api/analyse";
  //const apiUrl = "http://localhost:8000/api/analyse";

  const allowedExtensions = ["csv"];
  const [error, setError] = useState("");
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setError("");
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      setFile(inputFile);
    }
  };

  const HandleParse = () => {
    if (!file) return setError("Enter a valid file");
    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const jdata = { items: parsedData };

      // axios call to /api/analyse api
      axios
        .post(apiUrl, jdata, setLoading(true))
        .then((res) => {
          setLoading(false);
          navigate("/dashboard", { state: res.data });
        })
        .catch((error) => console.error("Error: $(error) "));
    };
    reader.readAsText(file);
  };

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };

  const ScrollOnClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <>
        <Grid container>
          <Grid item xs={6}>
            <div className="bannerContainer1">
              <h1>
                Find out how your <br /> portfolio is performing!
              </h1>

              <Button sx={{ textTransform: "none" }} onClick={ScrollOnClick}>
                <CloudUploadOutlinedIcon sx={{ mr: "10px", fontSize: 22 }} />
                Upload csv
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div
              className="bannerContainer2"
              style={{ backgroundImage: `url(${Banner})` }}
            ></div>
          </Grid>
        </Grid>
      </>

      <Box
        sx={{
          bgcolor: "#f0f0f0",
          height: "870px",
        }}
      >
        <div className="tabHeading">
          <h2>How to download csv from Zerodha?</h2>
        </div>

        <Tabs
          value={currentTabIndex}
          onChange={handleTabChange}
          centered
          variant="fullWidth"
        >
          <Tab
            icon={<LaptopMacIcon />}
            iconPosition="start"
            label="Using Desktop Browser"
          />
          <Tab
            icon={<PhoneAndroidIcon />}
            iconPosition="start"
            label="Using Mobile Browser"
          />
        </Tabs>
        {currentTabIndex === 0 && (
          <Box sx={{ p: 3 }}>
            <div className="tabVideoClass">
              <iframe
                width="900"
                height="500"
                src="https://www.youtube.com/embed/2REkk9SCRn0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
          </Box>
        )}

        {currentTabIndex === 1 && (
          <Box sx={{ p: 3 }}>
            <div className="tabVideoClass">
              <iframe
                width="900"
                height="500"
                src="https://www.youtube.com/embed/2REkk9SCRn0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
          </Box>
        )}
      </Box>

      <div
        ref={ref}
        className="actionClass"
        style={{ backgroundImage: `url(${ActionBanner})` }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="450px"
        >
          <div id="actiondivid">
            <h2>
              Find all about your Zerodha portfolio now!
              <br />
              Click on Choose File to upload
            </h2>
            <input
              onChange={handleFileChange}
              id="csvInput"
              name="file"
              type="File"
            />
            <br />
            <Button sx={{ textTransform: "none" }} onClick={HandleParse}>
              <CloudUploadOutlinedIcon sx={{ mr: "10px", fontSize: 23 }} />
              Click Here to Start Analysis
            </Button>
            <Box width="300px" sx={{ paddingTop: "40px", marginLeft: "95px" }}>
              {error ? (
                <Alert variant="outlined" severity="error">
                  {error}
                </Alert>
              ) : (
                ""
              )}
            </Box>
            {loading ? (
              <Box color="#505050">
                <p>Loading...</p>
                <br />
                <LinearProgress />
              </Box>
            ) : (
              ""
            )}
          </div>
        </Box>
      </div>
    </Layout>
  );
};

export default Home;

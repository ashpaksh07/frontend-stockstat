import React from "react";
import Layout from "../components/Layout/Layout";
import { Box } from "@mui/material";

const Pagenotfound = () => {
  return (
    <Layout>
      <Box
        sx={{ color: "#505050" }}
        alignContent="center"
        justifyContent="center"
        mt="275px"
        mb="275px"
        ml="77px"
      >
        <h1>Page Not Found</h1>
      </Box>
    </Layout>
  );
};

export default Pagenotfound;

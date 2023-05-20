import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import HeaderStyles from "../../styles/HeaderStyles.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/logo.jpg";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"#298BEA"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <Link to={"/"}>
          <img src={logo} alt="logo" height={"30"} width="120" />
        </Link>
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeclassname="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About Us</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "white" }}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"#298BEA"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Box sx={{ ml: 5 }}>
                <Link to={"/"}>
                  <img src={logo} alt="logo" height={"63"} width="230" />
                </Link>
              </Box>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, mr: 5 }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeclassname="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </li> */}
                <li>
                  <NavLink to={"/about"}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact Us</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "170px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

export default Header;

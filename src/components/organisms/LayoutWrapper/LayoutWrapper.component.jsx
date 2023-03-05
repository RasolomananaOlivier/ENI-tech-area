import React, { Fragment } from "react";

import SideBar from "./SideBar/SideBar.component";
import RightSideBar from "./RightSideBar/RightSideBar.component";
import Footer from "../Footer/Footer.component";
import Image from "../../../assets/home-students-2.jpg";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const Header = () => {
  return (
    <Box position="relative">
      <img src={Image} alt="" width="100%" height={260} />
      <Box
        position="absolute"
        top={60}
        display="flex"
        flexDirection="column"
        gap={2}
        sx={{ width: "50%", px: 8 }}
      >
        <Typography variant="h4" fontWeight="bold">
          Share & grow the world's knowledge!
        </Typography>
        <Typography>
          We want to connect the people who have knowledge to the people who
          need it, to bring together people with different perspectives so they
          can understand each other better, and to empower everyone to share
          their knowledge.
        </Typography>
      </Box>
    </Box>
  );
};

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Box sx={{ bgcolor: "#22242a" }}>
        <Box sx={{ position: "relative", top: 68 }}>
          {location.pathname === "/" ? <Header /> : null}
        </Box>
        <Box className="page" sx={{ position: "relative" }}>
          <SideBar />
          <div id="content">
            {children}
            <RightSideBar />
          </div>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default LayoutWrapper;

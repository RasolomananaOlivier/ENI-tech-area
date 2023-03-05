import React from "react";

import SideBarItem from "./SideBarItem.component";
import { SideBarData } from "./SideBarData";

import "./SideBar.styles.scss";
import { Box } from "@mui/material";

const SideBar = () => (
  <Box className="side-bar-container" sx={{ bgcolor: "#22242a" }}>
    <div className="side-bar-tabs">
      <SideBarItem isHome={true} link="/" text="Home" />

      <div className="public-tabs">
        {SideBarData.map(({ link, icon, text }, index) => (
          <SideBarItem key={index} link={link} icon={icon} text={text} />
        ))}
      </div>
    </div>
  </Box>
);

export default SideBar;

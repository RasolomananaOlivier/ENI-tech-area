import React, { Fragment } from "react";

import SideBarWidget from "./SideBarWidget/SideBarWidget.component";
import TagsWidget from "./TagsWidget/TagsWidget.component";

import "./RightSideBar.styles.scss";
import { Box } from "@mui/material";

const RightSideBar = () => {
  return (
    <Fragment>
      <Box id="sidebar" className="side-bar" sx={{ bgcolor: "#22242a" }}>
        <SideBarWidget />
        <TagsWidget />
      </Box>
    </Fragment>
  );
};

export default RightSideBar;

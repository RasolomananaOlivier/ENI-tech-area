import React, { Fragment } from "react";
import "./SideBarWidget.styles.scss";
import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
const usestyle = makeStyles({
  Image: {
    alignItems: "center",
    margin: "14px auto",
    width: "50px",
    height: "50px",
  },
  type0: {
    textDecoration: "underline",
    color: "#2e7d32",
  },
  SPAN: {
    margin: "6px 40px",
    paddingLeft: "20px",
  },
  types: {
    textAlign: "center",
  },
  Chip: {
    paddingLeft: "12px",
  },

  types1: {
    textAlign: "center",
    alignItems: "center",
    marginTop: "25px",
  },
  type2: {
    width: "80%",
    margin: "5px 60px",
    paddingTop: "13px",
    marginBottom: "50px",
  },
});
const SideBarWidget = () => {
  const classes = usestyle();
  return (
    <Fragment>
      <div
        className="s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16"
        data-tracker="cb=1"
      >
        <div>
          <Avatar src="t" className={classes.Image} />
          <div className={classes.types}>
            <Typography variant="h4" component="div" className={classes.type0}>
              Name
            </Typography>
            <Typography variant="h6" component="div"></Typography>
          </div>
          <div className={classes.SPAN}>
            <Stack direction="row" spacing={1}>
              <Chip label="primary" color="primary" variant="outlined" />
              <Chip label="success" color="success" variant="outlined" />
              <Chip label="info" color="info" variant="outlined" />
            </Stack>
          </div>
        </div>

        <div className={classes.types1}>
          <Typography variant="h4" component="div" className={classes}>
            Recent Comments
          </Typography>
        </div>
        <ul className={classes.type2}>
          <li>lorem ipsun dolor assets search?</li>
          <li>lorem ipsun dolor assets search?</li>
          <li>lorem ipsun dolor assets search?</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default SideBarWidget;

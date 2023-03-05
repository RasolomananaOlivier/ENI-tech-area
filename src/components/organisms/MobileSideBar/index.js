import { Button, Drawer } from "antd";
import { useState } from "react";
import { Box } from "@mui/system";
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const MobileSide = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ height: "55px" }}>
        <Box sx={{ position: "relative", float: "right", alignContent: "center" }}>
          <IconButton onClick={showDrawer}>
            <MoreVert size="large" sx={{ color: "white", marginTop: "3px", fontSize: "2rem" }} />
          </IconButton>
        </Box>

        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Box>
    </>
  );
};
export default MobileSide;

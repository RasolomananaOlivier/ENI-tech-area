import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

export default function Profil() {
  return (
    <>
      <Box id="mainbar" className="homepage fc-black-800" sx={{ bgcolor: "#323741" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            borderBottom: "2px solid hsl(47deg 30% 31%)",
            marginTop: "-4px",
            paddingBottom: "2px",
            fontWeight: "600",
          }}
        >
          <ArrowForwardIosIcon
            size="small"
            sx={{ fontSize: "1.5rem", marginLeft: "6px", position: "relative", top: "2px" }}
          />
          ALL MY QUESTIONS
        </Typography>
      </Box>
    </>
  );
}

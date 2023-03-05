import React, { Fragment } from "react";

import SideBar from "./SideBar/SideBar.component";
import RightSideBar from "./RightSideBar/RightSideBar.component";
import Footer from "../Footer/Footer.component";
import Image from "../../../assets/home-students-2.jpg";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import UploadFile from "../../../modules/AllUsersPage/Profil/uploadFile";

const Header = () => {
  return (
    <Box position="relative">
      <img src={Image} alt="" width="100%" height={260} />
      <Box position="absolute" top={60} display="flex" flexDirection="column" gap={2} sx={{ width: "50%", px: 8 }}>
        <Typography variant="h4" fontWeight="bold">
          Share & grow the world's knowledge!
        </Typography>
        <Typography>
          We want to connect the people who have knowledge to the people who need it, to bring together people with different
          perspectives so they can understand each other better, and to empower everyone to share their knowledge.
        </Typography>
      </Box>
    </Box>
  );
};
const Profil = () => {
  const [open, setOpen] = React.useState(false);
  let role = "admin";
  return (
    <Box position="relative">
      <Box
        component={"img"}
        src={Image}
        sx={{
          height: { xs: 260, sm: 200 },
          width: "100%",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          paddingLeft: { xs: "0", sm: "6rem" },
          paddingRight: { xs: "0", sm: "6rem" },
          top: "80px",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%", display: { xs: "grid", sm: "flex" } }}>
          <Box className="Avatar" sx={{ width: { xs: "100%", sm: "50%" } }}>
            <Grid container>
              <Grid xs={3.5} sm={1.3} sx={{ paddingLeft: { xs: "5px", sm: "0" } }}>
                <Avatar sx={{ height: "70px", width: "70px", border: "2px solid blue" }}></Avatar>
              </Grid>
              <Grid xs={8.5} sm={7} sx={{ display: "grid", alignContent: "center" }}>
                <Grid container>
                  <Grid xs={12} sm={8}>
                    <Typography
                      sx={{ fontSize: "20px", width: { xs: "auto", sm: "300px" }, color: "fff", fontWeight: "1000" }}
                    >
                      Andriamahafaly tsilavina henintsoa
                    </Typography>
                  </Grid>
                  <Grid xs={3} sx={{ display: "grid", alignContent: "center" }}>
                    <Typography
                      sx={{
                        display: "inline",
                        textAlign: "center",
                        padding: "4px 12px 6px 12px",
                        backgroundColor: "orange",
                        borderRadius: "8px",
                        width: "70px",
                        color: "#FFF",
                      }}
                    >
                      Teacher
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box className="btn" sx={{ width: { xs: "100%", sm: "50%" } }}>
            <Button
              variant="contained"
              color="success"
              sx={{
                position: "relative",
                fontSize: "1rem",
                float: "right",
                top: "50%",
                marginLeft: { xs: "0", sm: "12px" },
                marginRight: { xs: "4px", sm: "0" },
              }}
            >
              View question
            </Button>
            {role === "admin" ? (
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                color="success"
                sx={{
                  position: "relative",
                  fontSize: "1rem",
                  float: "right",
                  top: "50%",
                  marginRight: "12px",
                }}
              >
                Add to new user
              </Button>
            ) : null}
            <UploadFile open={open} setOpen={setOpen} />
          </Box>
        </Box>
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
          {location.pathname === "/Profil" ? <Profil /> : null}
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

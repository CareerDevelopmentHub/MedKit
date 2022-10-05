import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import DrawerComp from "./Drawer";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <MonitorHeartIcon style={{cursor: "pointer"}} onClick={()=>{navigate('/')}} sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography className="mediaq-logo" sx={{ fontSize: "2rem", paddingLeft: "4%" }}>
                MEDKIT
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Find A Doctor" onClick={()=>{navigate('/finddoctor')}} />
                <Tab label="Find A Hospital" onClick={()=>{navigate('/findhospital')}} />
                <Tab label="Buy Medicine" onClick={()=>{navigate('/buypage')}} />
                <Tab label="Contact US" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained" onClick={()=>{navigate('/login')}}>
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained" onClick={()=>{navigate('/register')}}>
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
// import { Route, Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import UserList from "../BodyComponent/EmployeeList";
import EditUser from "../BodyComponent/EditUser";
import AddUser from "../BodyComponent/AddUser";

export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Routes>
          {/* <Route exact path="/" element={<Dashboard />} /> */}
          <Route path="/" element={<UserList />} />
          <Route exact path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Box>
    </Fragment>
  );
}

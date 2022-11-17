import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    // { label: "Dashboard", link: "/", icon: <DashboardIcon /> },
    { label: "Employee", link: "", icon: <PersonIcon /> },
    { label: "Add Employee", link: "/add", icon: <PostAddIcon /> },
    { label: "logout", link: "/logout", icon: <ExitToAppIcon /> },
  ];

  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size="small"
          onClick={() => handleDrawerClose()}
          className={classes.navButton}
        >
          <ListItem
            exact
            key={i}
            component={NavLink}
            to={item.link}
            className={classes.navlink}
            activeClassName={classes.selectedNav}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}

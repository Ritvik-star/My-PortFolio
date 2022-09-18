import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  Toolbar,
  ListItemIcon,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avtar from "../avtar1.png";
import { makeStyles } from "@material-ui/core";

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    // background: "#511",
    // background: "#595959",
    background: "#2B2B2B",
    height: "100%",
    zIndex: 1,
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const [state, setstate] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setstate({
      ...state,
      [slider]: open,
    });
  };

  const classes = useStyles();

  const slidList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avtar} alt="Ritvik bandewar" />
      <Divider />
      <List>
        {menuItems.map((IsItem, key) => (
          <ListItem button key={key} component={Link} to={IsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {IsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={IsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222 " }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              DevFolio
            </Typography>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {slidList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

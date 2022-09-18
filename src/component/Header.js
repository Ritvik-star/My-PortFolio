import React from "react";
import { Typography, Grid, Box, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import avtar from "../avtar1.png";
import Typed from "react-typed";
import { AddToHomeScreen, Height } from "@material-ui/icons";
import bg from "../bg.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

//CSS styles

const useStyles = makeStyles((theme) => ({
  avtar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  typedContainer: {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  subTitle: {
    color: "rgb(197, 73, 73)",
    fontWeight: "600",
    marginBottom: "3rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      {/* <Grid container justifyContent="center">
        <Avatar className={classes.avtar} src={avtar} alt="Ritvik bandewar" />
      </Grid> */}
      <Typography variant="h2" className={classes.title}>
        <Typed strings={["I'm Ritvik bandewar,"]} typeSpeed={40} />
      </Typography>
      <br></br>
      <Typography variant="h4" className={classes.subTitle}>
        <Typed
          strings={[
            "Freelancer,",
            "Web Designer,",
            "Photographer,",
            "Full Stack Developer,",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;

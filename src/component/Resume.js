import React from "react";
import { Button, Link, makeStyles } from "@material-ui/core";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import { saveAs } from "file-saver";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    // background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-type-of(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },

  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5 rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
        "&:nth-of-type(2n):before": {
          display: "none",
        },
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
  downloadBtn: {
    background: "tomato",
    color: "white",
    fontSize: "0.6rem",
  },
}));

export const Resume = () => {
  // const download = () => {
  //   const link = document.createElement("a");
  //   link.download = "resume.pdf";
  //   link.href = "../resume.pdf";
  //   link.click();
  // };

  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1fuJ4B0oa08YVsUz1N29qnWo2omee8pC6/view?usp=sharing",
      "resume.pdf"
    );
  };

  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Box align="center">
          <Button className={classes.downloadBtn} onClick={saveFile}>
            Download Resume
          </Button>
        </Box>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Mern Stack Developer
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "tomato" }}
            >
              CLASSIC INFORMATICS
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "tan" }}
            >
              I'm working working as MERN STACK Developer at Classic Informatics
              since December 2021 and while I have done multiple modules and
              projects in Web Development.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="right"
              className={classes.subHeading}
            >
              Full Stack Development
            </Typography>
            <Typography
              variant="body1"
              align="right"
              style={{ color: "tomato" }}
            >
              Newton School
            </Typography>
            <Typography
              variant="subtitle1"
              align="right"
              style={{ color: "tan" }}
            >
              I did Apprenticeship of Full Stack Development at Newton School.
              It was like a bootcamp where we learnt and worked on relavent
              projects, I joined it since may 2021 and completed in November
              2021.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
            >
              Web Development
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "tomato" }}
            >
              SNS SISTECH Pvt Bhopal.
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "tan" }}
            >
              I did Internship as a Web Developer at SNS SISTECH Pvt Bhopal.
              Where I worked on front-end technologies like Html/Css, Bootstrap
              and Js. I joined it since September 2020 and completed in November
              2020.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

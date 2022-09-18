import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import bg2 from "../bg2.jpg";
import project1 from "../project1.png";
import project2 from "../project2.png";
import project3 from "../project3.png";

const useStyles = makeStyles({
  mainContainer: {
    // background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem",
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Content Management Website
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Content management website, this is static website in which
                  some frontend development projects ideas are available to
                  create.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://frontenddevelopment.netlify.app/"
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Food Recipe Web App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is dynamic food recipe web appilcation by which user can
                  search thier meal's recipes and can get instructions and can
                  also watch video to cook😊.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://food-recipe-mestorf-3915e7.netlify.app/"
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Expense Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Expense tracker, is a react appilcation by which user can add
                  thier amount and expense along with purchased item as string
                  and then can calculate the remaining total balance.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://expense-tracker-clarke-8bd010.netlify.app/"
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={bg2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem Ipsum, sometimes referred to as 'lipsum', is the
                  placeholder text used in design when creating content. It
                  helps designers plan out where the content will sit, without
                  needing to wait for the content to be written and approved.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;

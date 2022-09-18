import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import { Translate } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tan",
    borderColor: "tan",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tan",
    },
    "& label": {
      color: "#9DA8AA",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#9DA8AA",
      },
      "&:hover fieldset": {
        borderColor: "#9DA8AA",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9DA8AA",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_whhde1c",
        "template_py1lw0e",
        e.target,
        "wX3hR5jTpurhmt2_4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <Box component="div" style={{ height: "100vh" }}>
      <Navbar />
      <Grid container justify="center" direction="coloumn">
        <Box
          component="form"
          className={classes.form}
          action=""
          onSubmit={sendEmail}
        >
          <Typography
            variant="h6"
            style={{
              color: "tan",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Hire or Contact me
          </Typography>
          <br />
          <InputField
            id="outlined-basic"
            label="Name"
            type="text"
            name="fullName"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            id="outlined-basic"
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            margin="dense"
            inputProps={{ style: { color: "white" } }}
            size="medium"
          />
          <br />
          <InputField
            id="outlined-basic"
            label="Reason"
            type="text"
            name="message"
            variant="outlined"
            margin="dense"
            inputProps={{ style: { color: "white" } }}
            size="medium"
            multiline
            rows={4}
          />
          <br />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            type="submit"
          >
            contact me
          </Button>
        </Box>
        <Box>{result ? <Result /> : null}</Box>
      </Grid>
    </Box>
  );
};

export default Contacts;

const Result = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        style={{
          color: "#9DA8AA",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Your message has been successfully sent. I will contact you soon😊
      </Typography>
    </Box>
  );
};

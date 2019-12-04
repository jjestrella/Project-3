import React, { Fragment } from "react";
import User from '../../utils/Stores/User';
import AppBar from "../../components/AppBar/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Image from "../../styles/550e7c43-0952-4eb9-a62f-4b3a1c9ad953.jpg";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(27, 18),
    backgroundImage: `url(${Image})`,
    justify: "center",
    alignItems: "center",
    position: "relative"
  },
  typography: {
    textAlign: "center"
  }

}));


export default function () {
  User.refreshOnLoad();
  const classes = useStyles();


  return (
    <Fragment>
      <AppBar />
      <Paper className={classes.root}>
        <Typography variant="h1" component="h3" className={classes.typography}>
          BCS Crypto Game
          </Typography>
        <Typography variant="h6" component="h3" className={classes.typography}>
          Play the market without the risk!
          </Typography>
      </Paper>
    </Fragment>
  );
}









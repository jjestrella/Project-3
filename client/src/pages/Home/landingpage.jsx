import React, { Fragment } from "react";
import User from '../../utils/Stores/User';
import AppBar from "../../components/AppBar/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(27, 18),
    backgroundColor: "#607d8b",
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









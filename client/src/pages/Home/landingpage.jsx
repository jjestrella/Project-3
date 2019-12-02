<<<<<<< HEAD
// import React, { Fragment } from "react";
import React from "react";
import User from '../../utils/Stores/User';
import AppBar from "../../components/ButtonAppBar/ButtonAppBar";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// function EmailMessage() {
//     return (
//         <Fragment>
//             You must enter a valid email.
//         </Fragment>
//     );
// }

// function PasswordMessage() {
//     return (
//         <Fragment>
//             You must enter a valid password.
//         </Fragment>
//     );
// }
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
=======
import React from "react";
import User from '../../utils/Stores/User';
import AppBar from "../../components/AppBar/AppBar"

>>>>>>> origin

export default function () {
    User.refreshOnLoad();
    const classes = useStyles();

    return (
       <AppBar />,
       <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
       );
    }







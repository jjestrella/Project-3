import React, {Fragment} from "react";
import User from '../../utils/Stores/User';
import AppBar from "../../components/AppBar/AppBar";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Image from '../../styles/550e7c43-0952-4eb9-a62f-4b3a1c9ad953.jpg';
import MarketTable from '../../components/MarketTable/marketTable';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';




const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(25, 2),
      backgroundImage: `url(${Image})`,
      justifyContent: "center",
      
    

    },
    rootTwo: {
        padding: theme.spacing(25, 2),
      backgroundColor: "#fff8e1",
       
    }, 
    btnroot: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        
        
      },
      label: {
        textTransform: 'capitalize',
      },
      
    
  }));


export default function () {
    User.refreshOnLoad();
    const classes = useStyles();


    return (
        <Fragment>
       <AppBar />
        <Paper className={classes.root}>
        <Typography variant="h1" component="h5">
        <Box textAlign="center" m={1}>
        dio operae, eu vulputate felis rhoncus.
      </Box>
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
        <Link to="/signup">
        <Button justifyContent="center" className={classes.btnroot} >Start Playing Today!</Button>
        </Link>
      </Paper>
      <Divider />

      <Paper textAlign="center" className={classes.rootTwo}>
        <Typography textAlign="center" variant="h5" component="h3">
          About
        </Typography>
        <Typography textAlign="right" component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>

      <MarketTable />
    </Fragment>
   );
 }


    






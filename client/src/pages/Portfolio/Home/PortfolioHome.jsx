import React, { Fragment} from "react";
import User from "../../../utils/Stores/User";
import AppBar from "../../../components/AppBar/AppBar";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Button  from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PortfolioTable from "../../../components/PortfolioTable/portfolioTable";

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    }
  }));

export default function(){
    User.refreshOnLoad();
    const classes = useStyles();
    const [{user}] = User.useContext();
    
    return(
        <Fragment>
            <AppBar/>
            <Paper className={classes.root}>
                <Typography  variant="h6" component="h3">
                    Unspent: ${user.spending_cash}
                </Typography>
                <Link to="/market">
                    <Button variant="contained" color="primary">Market</Button>
                </Link>
            </Paper>
            <PortfolioTable />
        </Fragment>
    )
}
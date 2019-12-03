import React, { Fragment } from "../../node_modules/react";
import User from "../utils/Stores/User";
import { Switch, Route } from "../../node_modules/react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles"
import {
    LoggedInRoute,
    LoggedOutRoute
} from "../components";
import {
    NotFound,
    Login,
    Signup,
    Home,
    PortfolioHome,
    Market
} from "../pages";

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

function Routes() {
    const [{ pageLoading }] = User.useContext();
    User.refreshOnLoad();
    const classes = useStyles();
    return (
        <Fragment>
            {pageLoading ? (
                <div className={classes.root}>
                    <CircularProgress />
                </div>
            ) : (
            <Switch>
                <LoggedOutRoute exact path="/" component={Home} />
                <LoggedOutRoute exact path="/login" component={Login} />
                <LoggedOutRoute exact path="/signup" component={Signup} />
                <LoggedInRoute exact path="/portfoliohome" component={PortfolioHome} />
                <LoggedInRoute exact path="/market" component={Market}/>
                <LoggedOutRoute exact path="/logout" component={Home}/>
                <Route path="*" component={NotFound} />
            </Switch>
            )}
        </Fragment>
    );
}

export default Routes;

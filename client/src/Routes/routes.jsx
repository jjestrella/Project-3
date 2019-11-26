import React, { Fragment } from "../../node_modules/react";
import User from "../utils/Stores/User";
import { Switch, Route } from "../../node_modules/react-router-dom";
import {
    LoggedInRoute,
    LoggedOutRoute
} from "../components";
import {
    NotFound,
    Login,
    Signup,
    Home,
    Portfolio
} from "../pages";

function Routes() {
    User.refreshOnLoad();
    return (
        <Fragment>
                <Switch>
                    <LoggedOutRoute exact path="/" component={Home} />
                    <LoggedOutRoute exact path="/login" component={Login} />
                    <LoggedOutRoute exact path="/signup" component={Signup} />
                    <LoggedInRoute exact path= "/portfolio" component={Portfolio} />
                    <Route path="*" component={NotFound} />
                </Switch>
        </Fragment>
    );
}

export default Routes;

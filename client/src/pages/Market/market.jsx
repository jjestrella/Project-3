import React, { Fragment } from "react";
import User from "../../utils/Stores/User";
import AppBar from "../../components/AppBar/AppBar";
import MarketTable from "../../components/MarketTable/marketTable";



export default function(){
    User.refreshOnLoad();

    return(
        <Fragment>
            <AppBar/>
            <MarketTable/>
        </Fragment>
    )
}
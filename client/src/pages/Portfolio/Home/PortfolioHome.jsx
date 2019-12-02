import React, { useEffect, Fragment } from "react";
import User from "../../../utils/Stores/User"
import API from "../../../utils/Stores/Cryptos/cryptoAPI"
import AppBar from "../../../components/AppBar/AppBar"


export default function(){
    User.refreshOnLoad();

    useEffect(() => {
        API.getCryptos()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    return(
        <Fragment>
            <AppBar/>
            <div>
                this will be the member page
            </div>
        </Fragment>
    )
}
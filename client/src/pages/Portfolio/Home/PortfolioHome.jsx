import React, { useEffect } from "react";
import User from "../../../utils/Stores/User"
import API from "../../../utils/Stores/Cryptos/cryptoAPI"


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
        <div>
            this will be the member page
        </div>
    )
}
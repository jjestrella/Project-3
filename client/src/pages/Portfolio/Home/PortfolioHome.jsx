import React, { useEffect, Fragment, useState } from "react";
import User from "../../../utils/Stores/User"
import API from "../../../utils/Stores/Cryptos/cryptoAPI"
import AppBar from "../../../components/AppBar/AppBar"


export default function() {
    const [cryptos, setCryptos] = useState([]);
    User.refreshOnLoad();
   

    useEffect(() => {
        API.getCryptos()
            .then(res => {
                console.log(res);
                setCryptos(res.data);
               
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
   
        return (
            <Fragment>
            <AppBar/>
            <div>
                this will be the member page
            </div>
        
        <ul>
            {Object.keys(cryptos).map((item, i) => 
                <li key={i}>
                <span className="input-label">{ cryptos[item].name }</span>
                </li>)}  
        </ul>
        </Fragment>);
    
    } 
  

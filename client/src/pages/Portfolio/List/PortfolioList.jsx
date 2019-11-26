import React from "react";
import User from "../../../utils/Stores/User"

export default function(){
    User.refreshOnLoad();
    
    return(
        <div>
            this will be the member page
        </div>
    )
}
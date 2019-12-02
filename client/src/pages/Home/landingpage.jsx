import React from "react";
import User from '../../utils/Stores/User';
import AppBar from "../../components/AppBar/AppBar"


export default function () {
    User.refreshOnLoad();

    return (
       <AppBar />
    );
}
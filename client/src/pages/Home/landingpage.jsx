// import React, { Fragment } from "react";
import React from "react";
import User from '../../utils/Stores/User';
import AppBar from "../../components/ButtonAppBar/ButtonAppBar"

// function EmailMessage() {
//     return (
//         <Fragment>
//             You must enter a valid email.
//         </Fragment>
//     );
// }

// function PasswordMessage() {
//     return (
//         <Fragment>
//             You must enter a valid password.
//         </Fragment>
//     );
// }

export default function () {
    User.refreshOnLoad();

    return (
       <AppBar />
    );
}
import React, { Fragment } from "react";
import Container from '@material-ui/core/Container';
import { UserFormSignUp } from '../../components';
import User from '../../utils/Stores/User';
import AppBar from "../../components/AppBar/AppBar"

function EmailMessage() {
    return (
        <Fragment>
            You must provide a valid email.
        </Fragment>
    );
}

function PasswordMessage() {
    return (
        <Fragment>
            You must provide a valid password.
                            <ul>
                <li>At least 8 characters long</li>
                <li>Including at least 1 uppercase letter</li>
                <li>Including at least 1 lowercase letter</li>
                <li>Including at least 1 number</li>
                <li>Including at least 1 symbol</li>
            </ul>
        </Fragment>
    );
}

export default function () {
    User.refreshOnLoad();

    return (
        <Fragment>
            <AppBar/>
            <Container className="mt-5">
                <UserFormSignUp
                    name="Sign Up"
                    className="signup"
                    api={User.API.signup}
                    passwordPattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                    EmailMessage={EmailMessage}
                    PasswordMessage={PasswordMessage}
                />
            </Container>
        </Fragment>
    );
}

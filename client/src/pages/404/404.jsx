import React from "react";
import User from '../../utils/Stores/User';
import Container from "@material-ui/core/Container";

export default function (props) {
    User.refreshOnLoad();
    return (
        <Container className="mt-5">  
                    <h2>
                        404 - Not Found
                    </h2>
                    <p className="not-found mt-5">
                        The path "{props.match.url}" was not found.
                    </p>
        </Container>
    );
}

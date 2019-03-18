import React from "react";
import { Alert } from "react-bootstrap";

const ErrorAlert = ({ error }) => {
    if (error) {
        return (
            <Alert variant="danger" dismissible>
                <span>Oops, an error has occured!</span>
            </Alert>
        );
    }

    return null;
};

export default ErrorAlert;

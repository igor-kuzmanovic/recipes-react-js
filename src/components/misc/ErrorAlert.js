import React from "react";
import { Alert } from "react-bootstrap";

const ErrorAlert = ({ error }) => {
    if (error) {
        return (
            <Alert variant="danger" dismissible>
                <Alert.Heading>Oops, an error has occured!</Alert.Heading>
                {!Array.isArray(error) && <p>{error}</p>}
                {Array.isArray(error) && error.map(err => <p>{err}</p>)}
            </Alert>
        );
    }

    return null;
};

export default ErrorAlert;

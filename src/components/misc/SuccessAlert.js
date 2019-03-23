import React from "react";
import { Alert } from "react-bootstrap";

const SuccessAlert = ({ isShown, message }) => {
    if (isShown) {
        return (
            <Alert variant="success" dismissible>
                <span>{message}</span>
            </Alert>
        );
    }

    return null;
};

export default SuccessAlert;

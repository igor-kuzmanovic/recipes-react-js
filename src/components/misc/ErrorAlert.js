import React from "react";
import { Alert } from "react-bootstrap";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const ErrorAlert = ({ error }) => {
    if (error) {
        let errorText = "Oops, an error has occured!";

        if (error.response) {
			if (error.response.data.status === 500) {
				errorText = "An internal server error has occured";
			}
            else if (error.response.data.message) {
                errorText = error.response.data.message;
            } else if (error.response.data.detail) {
                errorText = capitalizeFirstLetter(error.response.data.detail);
            }
        }

        return (
            <Alert variant="danger" dismissible>
                <span>{errorText}</span>
            </Alert>
        );
    }

    return null;
};

export default ErrorAlert;

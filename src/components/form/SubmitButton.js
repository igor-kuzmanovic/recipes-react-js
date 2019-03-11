import React from "react";
import { Button } from "react-bootstrap";

const SubmitButton = ({ disabled }) => {
    return (
        <Button variant="primary" type="submit" disabled={disabled}>
            Submit
        </Button>
    );
};

export default SubmitButton;

import React from "react";
import { Button } from "react-bootstrap";

const ConfirmButton = ({ onClick, disabled }) => {
    return (
        <Button onClick={onClick} variant="danger" disabled={disabled}>
            Confirm
        </Button>
    );
};

export default ConfirmButton;

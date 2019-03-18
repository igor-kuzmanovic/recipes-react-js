import React from "react";
import { Button } from "react-bootstrap";
import Spinner from "../misc/Spinner";

const ConfirmButton = ({ onClick, disabled }) => {
    return (
        <Button onClick={onClick} variant="danger" disabled={disabled}>
            Confirm <Spinner isLoading={disabled} />
        </Button>
    );
};

export default ConfirmButton;

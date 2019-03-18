import React from "react";
import { Button } from "react-bootstrap";
import Spinner from "../misc/Spinner";

const SubmitButton = ({ disabled }) => {
    return (
        <Button variant="primary" type="submit" disabled={disabled}>
            Submit <Spinner isLoading={disabled} />
        </Button>
    );
};

export default SubmitButton;

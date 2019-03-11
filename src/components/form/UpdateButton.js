import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const UpdateButton = ({ link }) => {
    return (
        <LinkContainer to={link}>
            <Button variant="primary">
                <FontAwesomeIcon icon={faEdit} />
            </Button>
        </LinkContainer>
    );
};

export default UpdateButton;

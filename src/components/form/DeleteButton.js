import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({ link }) => {
    return (
        <LinkContainer to={link}>
            <Button variant="danger">
                <FontAwesomeIcon icon={faTrash} />
            </Button>
        </LinkContainer>
    );
};

export default DeleteButton;

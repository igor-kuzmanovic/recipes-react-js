import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CreateButton = ({ link }) => {
    return (
        <LinkContainer to={link} activeClassName="">
            <Button variant="primary">Create</Button>
        </LinkContainer>
    );
};

export default CreateButton;

import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const BackButton = ({ link }) => {
    return (
        <LinkContainer to={link} activeClassName="">
            <Button variant="secondary">Back</Button>
        </LinkContainer>
    );
};

export default BackButton;

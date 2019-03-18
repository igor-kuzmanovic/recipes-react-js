import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const LinkButton = ({ children, link }) => {
    return (
        <LinkContainer to={link}>
            <Button variant="link" block className="text-left">
                {children}
            </Button>
        </LinkContainer>
    );
};

export default LinkButton;

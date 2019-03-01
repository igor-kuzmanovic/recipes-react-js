import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>RecipesApp</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/recipes">
                    <Nav.Link>Recipes</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/ingredients">
                    <Nav.Link>Ingredients</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/categories">
                    <Nav.Link>Categories</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/tags">
                    <Nav.Link>Tags</Nav.Link>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;
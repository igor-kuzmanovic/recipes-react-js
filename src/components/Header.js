import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ROLE_ADMIN } from "../constants/auth";

class Header extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <Navbar bg="light" expand="md">
                <div className="container">
                    <LinkContainer to="/">
                        <Navbar.Brand>RecipesApp</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {user && (
                                <>
                                    <LinkContainer to="/recipes">
                                        <Nav.Link>Recipes</Nav.Link>
                                    </LinkContainer>
                                    {user.roles.includes(ROLE_ADMIN) && (
                                        <>
                                            <LinkContainer to="/ingredients">
                                                <Nav.Link>Ingredients</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to="/categories">
                                                <Nav.Link>Categories</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to="/tags">
                                                <Nav.Link>Tags</Nav.Link>
                                            </LinkContainer>
                                        </>
                                    )}
                                    <NavDropdown title={user.username}>
                                        <LinkContainer to="/settings">
                                            <NavDropdown.Item>
                                                Settings
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Divider />
                                        <LinkContainer to="/logout">
                                            <NavDropdown.Item>
                                                Log Out
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

export default connect(mapStateToProps)(Header);

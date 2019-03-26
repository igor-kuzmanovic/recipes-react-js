import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { ROLE_ADMIN } from "../constants/auth";

class Header extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <Navbar bg="secondary" variant="dark" expand="md">
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
                                        <LinkContainer to="/settings" activeClassName="">
                                            <NavDropdown.Item>
                                                <FontAwesomeIcon icon={faCog} />{" "}
                                                Settings
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Divider />
                                        <LinkContainer to="/logout" activeClassName="">
                                            <NavDropdown.Item>
                                                <FontAwesomeIcon
                                                    icon={faSignOutAlt}
                                                />{" "}
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

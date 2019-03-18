import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="md">
                <div className="container">
                    <LinkContainer to="/">
                        <Navbar.Brand>RecipesApp</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {this.props.isLoggedIn && (
                                <>
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
                                    <NavDropdown>
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
        isLoggedIn: state.auth.isLoggedIn
    };
};

export default connect(mapStateToProps)(Header);

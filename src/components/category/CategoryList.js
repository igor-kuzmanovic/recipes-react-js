import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { fetchCategories, reset } from "../../actions/category/list";

class CategoryList extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    renderList() {
        return this.props.categories.map(category => {
            const { id, name } = category;
            return (
                <tr key={id}>
                    <td className="w-100">
                        <Link to={`/categories/${id}`}>{name}</Link>
                    </td>
                    <td className="p-0">
                        <ButtonGroup>
                            <LinkContainer to={`/categories/update/${id}`}>
                                <Button variant="primary">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                            </LinkContainer>
                            <LinkContainer to={`/categories/delete/${id}`}>
                                <Button variant="danger">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </LinkContainer>
                        </ButtonGroup>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <h3 className="my-3 text-center">Categories</h3>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>{null}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                        {this.props.isLoading && (
                            <tr>
                                <td colSpan="2">
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <div className="row mb-3">
                    <div className="col text-left">
                        <LinkContainer to="/" activeClassName="">
                            <Button variant="secondary">Back to home</Button>
                        </LinkContainer>
                    </div>
                    <div className="col text-right">
                        <LinkContainer
                            to={"/categories/create"}
                            activeClassName=""
                        >
                            <Button variant="primary">Create a category</Button>
                        </LinkContainer>
                    </div>
                </div>
                {this.props.error && (
                    <Alert variant="danger" dismissible>
                        <Alert.Heading>Error</Alert.Heading>
                        <p>{this.props.error}</p>
                    </Alert>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.categories.isLoading,
        error: state.categories.error,
        categories: Object.values(state.categories.items)
    };
};

const mapDispatchToProps = {
    fetchCategories,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);

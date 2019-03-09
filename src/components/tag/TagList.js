import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { fetchTags, reset } from "../../actions/tag/list";

class TagList extends React.Component {
    componentDidMount() {
        this.props.fetchTags();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    renderList() {
        return this.props.tags.map(tag => {
            const { id, name } = tag;
            return (
                <tr key={id}>
                    <td className="w-100">
                        <Link to={`/tags/${id}`}>{name}</Link>
                    </td>
                    <td className="p-0">
                        <ButtonGroup>
                            <LinkContainer to={`/tags/update/${id}`}>
                                <Button variant="primary">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                            </LinkContainer>
                            <LinkContainer to={`/tags/delete/${id}`}>
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
                <h3>Tags</h3>
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
                <div className="row">
                    <div className="col text-left">
                        <LinkContainer to="/" activeClassName="">
                            <Button variant="secondary">Back to home</Button>
                        </LinkContainer>
                    </div>
                    <div className="col text-right">
                        <LinkContainer to={"/tags/create"} activeClassName="">
                            <Button variant="primary">Create a tag</Button>
                        </LinkContainer>
                    </div>
                </div>
                {this.props.error && (
                    <Alert variant="danger">
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
        isLoading: state.tags.isLoading,
        error: state.tags.error,
        tags: Object.values(state.tags.items)
    };
};

const mapDispatchToProps = {
    fetchTags,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagList);

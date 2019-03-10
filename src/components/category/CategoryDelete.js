import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { deleteCategory, reset } from "../../actions/category/delete";

class CategoryDelete extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onDeleteClick = () => {
        this.props.deleteCategory(this.props.match.params.id);
    };

    render() {
        if (this.props.deleted) {
            return <Redirect to="/categories" />;
        }

        return (
            <div>
                <h3 className="my-3 text-center">
                    Are you sure you want to delete this category?{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                <div className="row mb-3">
                    <div className="col text-left">
                        <LinkContainer to="/categories" activeClassName="">
                            <Button variant="secondary">Back to list</Button>
                        </LinkContainer>
                    </div>
                    <div className="col text-right">
                        <Button
                            onClick={this.onDeleteClick}
                            variant="danger"
                            disabled={this.props.isLoading}
                        >
                            Confirm
                        </Button>
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

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.categories.isLoading,
        error: state.categories.error,
        deleted: state.categories.deleted
    };
};

const mapDispatchToProps = {
    deleteCategory,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CategoryDelete));

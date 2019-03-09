import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { deleteIngredient, reset } from "../../actions/ingredient/delete";

class IngredientDelete extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onDeleteClick = () => {
        this.props.deleteIngredient(this.props.match.params.id);
    };

    render() {
        if (this.props.deleted) {
            return <Redirect to="/ingredients" />;
        }

        return (
            <div>
                <h3 className="my-3">
                    Are you sure you want to delete this ingredient?{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                <div className="row">
                    <div className="col text-left">
                        <LinkContainer to="/ingredients" activeClassName="">
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
                    <Alert variant="danger" dismissible className="mt-3">
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
        isLoading: state.ingredients.isLoading,
        error: state.ingredients.error,
        deleted: state.ingredients.deleted
    };
};

const mapDispatchToProps = {
    deleteIngredient,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(IngredientDelete));

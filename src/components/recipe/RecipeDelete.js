import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { deleteRecipe, reset } from "../../actions/recipe/delete";

class RecipeDelete extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onDeleteClick = () => {
        this.props.deleteRecipe(this.props.match.params.id);
    };

    render() {
        if (this.props.deleted) {
            return <Redirect to="/recipes" />;
        }

        return (
            <div>
                <h3 className="my-3">
                    Are you sure you want to delete this recipe?{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                <div className="row">
                    <div className="col text-left">
                        <LinkContainer to="/recipes" activeClassName="">
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
        isLoading: state.recipes.isLoading,
        error: state.recipes.error,
        deleted: state.recipes.deleted
    };
};

const mapDispatchToProps = {
    deleteRecipe,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RecipeDelete));

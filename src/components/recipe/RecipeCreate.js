import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { createRecipe, reset } from "../../actions/recipe/create";
import RecipeForm from "./RecipeForm";

class RecipeCreate extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.createRecipe(formValues);
    };

    render() {
        if (this.props.created) {
            return <Redirect to={`/recipes/${this.props.created}`} />;
        }

        return (
            <div>
                <h3>
                    Create a new recipe{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                <RecipeForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={this.props.isLoading}
                />
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

const mapStateToProps = state => {
    return {
        isLoading: state.recipes.isLoading,
        error: state.recipes.error,
        created: state.recipes.created
    };
};

const mapDispatchToProps = {
    createRecipe,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RecipeCreate));

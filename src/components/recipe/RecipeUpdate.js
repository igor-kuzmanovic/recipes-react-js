import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchRecipe, updateRecipe } from "../../actions/recipe";
import { reset } from "../../actions/recipe/update";
import RecipeForm from "./RecipeForm";

class RecipeUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.updateRecipe(this.props.match.params.id, formValues);
    };

    render() {
        if (this.props.updated) {
            return <Redirect to={`/recipes/${this.props.updated}`} />;
        }

        return (
            <div>
                <h3>
                    Update this recipe{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                {this.props.recipe && (
                    <RecipeForm
                        initialValues={_.pick(this.props.recipe, "title")}
                        onSubmit={this.onSubmit}
                        isSubmitDisabled={this.props.isLoading}
                    />
                )}
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
        recipe: state.recipes.items[ownProps.match.params.id],
        updated: state.recipes.updated
    };
};

const mapDispatchToProps = {
    fetchRecipe,
    updateRecipe,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RecipeUpdate));

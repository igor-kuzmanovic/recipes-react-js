import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { createRecipe, reset } from "../../actions/recipe/create";
import { fetchIngredients } from "../../actions/ingredient/list";
import { fetchCategories } from "../../actions/category/list";
import { fetchTags } from "../../actions/tag/list";
import RecipeForm from "./RecipeForm";

class RecipeCreate extends React.Component {
    componentDidMount() {
        this.props.fetchIngredients();
        this.props.fetchCategories();
        this.props.fetchTags();
    }

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
                <h3 className="my-3 text-center">
                    Create a new recipe{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                <RecipeForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={this.props.isLoading}
                    ingredients={this.props.ingredients}
                    categories={this.props.categories}
                    tags={this.props.tags}
                />
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
        isLoading: state.recipes.isLoading,
        error: state.recipes.error,
        created: state.recipes.created,
        ingredients: Object.values(state.ingredients.items),
        categories: Object.values(state.categories.items),
        tags: Object.values(state.tags.items)
    };
};

const mapDispatchToProps = {
    createRecipe,
    reset,
    fetchIngredients,
    fetchCategories,
    fetchTags
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RecipeCreate));

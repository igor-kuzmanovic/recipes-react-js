import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchRecipe, updateRecipe } from "../../actions/recipe";
import { reset } from "../../actions/recipe/update";
import { fetchIngredients } from "../../actions/ingredient/list";
import { fetchCategories } from "../../actions/category/list";
import { fetchTags } from "../../actions/tag/list";
import RecipeForm from "./RecipeForm";

class RecipeUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id);
        this.props.fetchIngredients();
        this.props.fetchCategories();
        this.props.fetchTags();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    parseRecipe(recipe) {
        return {
            ...recipe,
            ingredients: recipe.ingredients.map(ingredient => ingredient.id),
            category: recipe.category.id,
            tags: recipe.tags.map(tag => tag.id)
        };
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
                <h3 className="my-3 text-center">
                    Update this recipe{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                {this.props.recipe && (
                    <RecipeForm
                        initialValues={_.pick(
                            this.parseRecipe(this.props.recipe),
                            "title",
                            "description",
                            "ingredients",
                            "category",
                            "tags",
                            "imageUrl"
                        )}
                        onSubmit={this.onSubmit}
                        isSubmitDisabled={this.props.isLoading}
                        ingredients={this.props.ingredients}
                        categories={this.props.categories}
                        tags={this.props.tags}
                    />
                )}
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
        isLoading: state.recipes.isLoading,
        error: state.recipes.error,
        recipe: state.recipes.items[ownProps.match.params.id],
        updated: state.recipes.updated,
        ingredients: Object.values(state.ingredients.items),
        categories: Object.values(state.categories.items),
        tags: Object.values(state.tags.items)
    };
};

const mapDispatchToProps = {
    fetchRecipe,
    updateRecipe,
    reset,
    fetchIngredients,
    fetchCategories,
    fetchTags
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RecipeUpdate));

import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchRecipe, updateRecipe } from "../../actions/recipe";
import { reset } from "../../actions/recipe/update";
import { fetchIngredients } from "../../actions/ingredient/list";
import { fetchCategories } from "../../actions/category/list";
import { fetchTags } from "../../actions/tag/list";
import RecipeForm from "./RecipeForm";
import ErrorAlert from "../misc/ErrorAlert";

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

    parseRecipe() {
        const recipe = this.props.recipe;
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
        const {
            recipe,
            ingredients,
            categories,
            tags,
            updated,
            isLoading,
            error
        } = this.props;

        if (updated) {
            return <Redirect to={`/recipes/${updated}`} />;
        }

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">Update this recipe</h3>
                {recipe && (
                    <RecipeForm
                        initialValues={_.pick(
                            this.parseRecipe(),
                            "title",
                            "description",
                            "ingredients",
                            "category",
                            "tags",
                            "imageUrl"
                        )}
                        onSubmit={this.onSubmit}
                        isSubmitDisabled={isLoading}
                        ingredients={ingredients}
                        categories={categories}
                        tags={tags}
                    />
                )}
                <ErrorAlert error={error} />
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
)(RecipeUpdate);

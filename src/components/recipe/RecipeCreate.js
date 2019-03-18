import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createRecipe, reset } from "../../actions/recipe/create";
import { fetchIngredients } from "../../actions/ingredient/list";
import { fetchCategories } from "../../actions/category/list";
import { fetchTags } from "../../actions/tag/list";
import RecipeForm from "./RecipeForm";
import ErrorAlert from "../misc/ErrorAlert";

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
        const {
            ingredients,
            categories,
            tags,
            created,
            isLoading,
            error
        } = this.props;

        if (created) {
            return <Redirect to={`/recipes/${created}`} />;
        }

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">Create a new recipe</h3>
                <RecipeForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={isLoading}
                    ingredients={ingredients}
                    categories={categories}
                    tags={tags}
                />
                <ErrorAlert error={error} />
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
)(RecipeCreate);

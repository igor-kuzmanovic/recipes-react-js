import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { fetchRecipe, reset } from "../../actions/recipe/show";
import { BackButton } from "../form";
import { SuccessAlert, ErrorAlert, Spinner } from "../misc";

class RecipeShow extends React.Component {
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const { recipe, created, updated, isLoading, error } = this.props;

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">
                    {recipe && <strong>{recipe.title}</strong>}{" "}
                    <Spinner isLoading={isLoading && !recipe} />
                </h3>
                <h4 className="my-3 text-center">
                    <strong className="text-secondary">Description:</strong>{" "}
                    {recipe && recipe.description}
                    <Spinner isLoading={isLoading && !recipe} />
                </h4>
                <h4 className="my-3 text-center">
                    <strong className="text-secondary">Ingredients:</strong>
                    {recipe &&
                        recipe.ingredients.map(ingredient => (
                            <span key={ingredient.id}> {ingredient.name}</span>
                        ))}{" "}
                    <Spinner isLoading={isLoading && !recipe} />
                </h4>
                <h4 className="my-3 text-center">
                    <strong className="text-secondary">Category:</strong>{" "}
                    {recipe && recipe.category.name}
                    <Spinner isLoading={isLoading && !recipe} />
                </h4>
                <h4 className="my-3 text-center">
                    <strong className="text-secondary">Tags:</strong>
                    {recipe &&
                        recipe.tags.map(tag => (
                            <span key={tag.id}> {tag.name}</span>
                        ))}{" "}
                    <Spinner isLoading={isLoading && !recipe} />
                </h4>
                <h4 className="my-3 text-center">
                    <strong className="text-secondary">By:</strong>{" "}
                    {recipe && recipe.user.email}
                    <Spinner isLoading={isLoading && !recipe} />
                </h4>
                <h4 className="my-3 text-center">
                    <strong className="text-secondary">Date:</strong>{" "}
                    {recipe &&
                        moment(recipe.creationDate).format("MMMM Do YYYY")}
                    <Spinner isLoading={isLoading && !recipe} />
                </h4>
                <div className="mb-3 text-center">
                    <BackButton link="/recipes" />
                </div>
                <ErrorAlert error={error} />
                <SuccessAlert
                    isShown={created}
                    message="Tag successfully created"
                />
                <SuccessAlert
                    isShown={updated}
                    message="Tag successfully updated"
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.recipes.isLoading,
        error: state.recipes.error,
        recipe: state.recipes.items[ownProps.match.params.id],
        created: state.recipes.created,
        updated: state.recipes.updated
    };
};

const mapDispatchToProps = {
    fetchRecipe,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeShow);

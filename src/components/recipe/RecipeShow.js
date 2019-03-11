import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { fetchRecipe, reset } from "../../actions/recipe/show";
import { BackButton } from "../form";
import { ErrorAlert, Spinner } from "../misc";

class RecipeShow extends React.Component {
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const { recipe, isLoading, error } = this.props;

        return (
            <div>
                {recipe && (
                    <>
                        <h3 className="my-3 text-center">
                            <strong>{recipe.title}</strong>{" "}
                            <Spinner isLoading={isLoading} />
                        </h3>
                        <h4 className="my-3 text-center">
                            <strong>Description:</strong> {recipe.description}
                        </h4>
                        <h4 className="my-3 text-center">
                            <strong>Ingredients:</strong>
                            {recipe.ingredients.map(ingredient => (
                                <span key={ingredient.id}>
                                    {" "}
                                    {ingredient.name}
                                </span>
                            ))}
                        </h4>
                        <h4 className="my-3 text-center">
                            <strong>Category:</strong> {recipe.category.name}
                        </h4>
                        <h4 className="my-3 text-center">
                            <strong>Tags:</strong>
                            {recipe.tags.map(tag => (
                                <span key={tag.id}> {tag.name}</span>
                            ))}
                        </h4>
                        <h4 className="my-3 text-center">
                            <strong>Date:</strong>{" "}
                            {moment(recipe.creationDate).format(
                                "MMMM Do YYYY, h:mm:ss a"
                            )}
                        </h4>
                    </>
                )}
                <BackButton link="/recipes" />
                <ErrorAlert error={error} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.recipes.isLoading,
        error: state.recipes.error,
        recipe: state.recipes.items[ownProps.match.params.id]
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

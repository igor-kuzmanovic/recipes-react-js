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
                    <h3 className="my-3 text-center">
                        {recipe.title} <Spinner isLoading={isLoading} />
                    </h3>
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

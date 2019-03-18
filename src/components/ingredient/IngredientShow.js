import React from "react";
import { connect } from "react-redux";
import { fetchIngredient, reset } from "../../actions/ingredient/show";
import { BackButton } from "../form";
import { ErrorAlert, Spinner } from "../misc";

class IngredientShow extends React.Component {
    componentDidMount() {
        this.props.fetchIngredient(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const { ingredient, isLoading, error } = this.props;

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">
                    {ingredient && <strong>{ingredient.name}</strong>}{" "}
                    <Spinner isLoading={isLoading && !ingredient} />
                </h3>
                <div className="mb-3 text-center">
                    <BackButton link="/ingredients" />
                </div>
                <ErrorAlert error={error} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.ingredients.isLoading,
        error: state.ingredients.error,
        ingredient: state.ingredients.items[ownProps.match.params.id]
    };
};

const mapDispatchToProps = {
    fetchIngredient,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientShow);

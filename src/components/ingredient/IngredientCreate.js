import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createIngredient, reset } from "../../actions/ingredient/create";
import IngredientForm from "./IngredientForm";
import ErrorAlert from "../misc/ErrorAlert";

class IngredientCreate extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.createIngredient(formValues);
    };

    render() {
        const { created, isLoading, error } = this.props;

        if (created) {
            return <Redirect to={`/ingredients/${created}`} />;
        }

        return (
            <div>
                <h3 className="my-3 text-center">Create a new ingredient</h3>
                <IngredientForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={isLoading}
                />
                <ErrorAlert error={error} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.ingredients.isLoading,
        error: state.ingredients.error,
        created: state.ingredients.created
    };
};

const mapDispatchToProps = {
    createIngredient,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientCreate);

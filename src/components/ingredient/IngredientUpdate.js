import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchIngredient, updateIngredient } from "../../actions/ingredient";
import { reset } from "../../actions/ingredient/update";
import IngredientForm from "./IngredientForm";

class IngredientUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchIngredient(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.updateIngredient(this.props.match.params.id, formValues);
    };

    render() {
        if (this.props.updated) {
            return <Redirect to={`/ingredients/${this.props.updated}`} />;
        }

        return (
            <div>
                <h3 className="my-3 text-center">
                    Update this ingredient{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                {this.props.ingredient && (
                    <IngredientForm
                        initialValues={_.pick(this.props.ingredient, "name")}
                        onSubmit={this.onSubmit}
                        isSubmitDisabled={this.props.isLoading}
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
        isLoading: state.ingredients.isLoading,
        error: state.ingredients.error,
        ingredient: state.ingredients.items[ownProps.match.params.id],
        updated: state.ingredients.updated
    };
};

const mapDispatchToProps = {
    fetchIngredient,
    updateIngredient,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(IngredientUpdate));

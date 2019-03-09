import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { createIngredient, reset } from "../../actions/ingredient/create";
import IngredientForm from "./IngredientForm";

class IngredientCreate extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.createIngredient(formValues);
    };

    render() {
        if (this.props.created) {
            return <Redirect to={`/categories/${this.props.created}`} />;
        }

        return (
            <div>
                <h3>
                    Create a new ingredient{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                <IngredientForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={this.props.isLoading}
                />
                {this.props.error && (
                    <Alert variant="danger">
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
        isLoading: state.categories.isLoading,
        error: state.categories.error,
        created: state.categories.created
    };
};

const mapDispatchToProps = {
    createIngredient,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(IngredientCreate));

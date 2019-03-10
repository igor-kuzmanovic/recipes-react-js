import React from "react";
import { connect } from "react-redux";
import { Button, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchIngredient, reset } from "../../actions/ingredient/show";

class IngredientShow extends React.Component {
    componentDidMount() {
        this.props.fetchIngredient(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        return (
            <div>
                {this.props.ingredient && (
                    <h3 className="my-3 text-center">
                        {this.props.ingredient.name}{" "}
                        {this.props.isLoading && (
                            <FontAwesomeIcon icon={faSpinner} spin />
                        )}
                    </h3>
                )}
                <LinkContainer
                    to="/ingredients"
                    activeClassName=""
                    className="mb-3"
                >
                    <Button variant="secondary">Back to list</Button>
                </LinkContainer>
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

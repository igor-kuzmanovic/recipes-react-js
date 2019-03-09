import React from "react";
import { connect } from "react-redux";
import { Button, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchRecipe, reset } from "../../actions/recipe/show";

class RecipeShow extends React.Component {
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        return (
            <div>
                {this.props.recipe && (
                    <h3>
                        {this.props.recipe.title}{" "}
                        {this.props.isLoading && (
                            <FontAwesomeIcon icon={faSpinner} spin />
                        )}
                    </h3>
                )}
                <LinkContainer to="/recipes" activeClassName="">
                    <Button variant="secondary">Back to list</Button>
                </LinkContainer>
                {this.props.error && (
                    <Alert variant="danger" dismissible className="mt-3">
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

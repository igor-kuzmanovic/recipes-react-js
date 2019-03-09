import React from "react";
import { connect } from "react-redux";
import { Button, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchCategory, reset } from "../../actions/category/show";

class CategoryShow extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        return (
            <div>
                {this.props.category && (
                    <h3>
                        {this.props.category.name}{" "}
                        {this.props.isLoading && (
                            <FontAwesomeIcon icon={faSpinner} spin />
                        )}
                    </h3>
                )}
                <LinkContainer to="/categories" activeClassName="">
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
        isLoading: state.categories.isLoading,
        error: state.categories.error,
        category: state.categories.items[ownProps.match.params.id]
    };
};

const mapDispatchToProps = {
    fetchCategory,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryShow);

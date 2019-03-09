import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { createCategory, reset } from "../../actions/category/create";
import CategoryForm from "./CategoryForm";

class CategoryCreate extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.createCategory(formValues);
    };

    render() {
        if (this.props.created) {
            return <Redirect to={`/categories/${this.props.created}`} />;
        }

        return (
            <div>
                <h3>
                    Create a new category{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                <CategoryForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={this.props.isLoading}
                />
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

const mapStateToProps = state => {
    return {
        isLoading: state.categories.isLoading,
        error: state.categories.error,
        created: state.categories.created
    };
};

const mapDispatchToProps = {
    createCategory,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CategoryCreate));

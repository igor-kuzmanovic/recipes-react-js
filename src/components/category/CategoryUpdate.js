import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchCategory, updateCategory } from "../../actions/category";
import { reset } from "../../actions/category/update";
import CategoryForm from "./CategoryForm";

class CategoryUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.updateCategory(this.props.match.params.id, formValues);
    };

    render() {
        if (this.props.updated) {
            return <Redirect to={`/categories/${this.props.updated}`} />;
        }

        return (
            <div>
                <h3 className="my-3">
                    Update this category{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                {this.props.category && (
                    <CategoryForm
                        initialValues={_.pick(this.props.category, "name")}
                        onSubmit={this.onSubmit}
                        isSubmitDisabled={this.props.isLoading}
                    />
                )}
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
        category: state.categories.items[ownProps.match.params.id],
        updated: state.categories.updated
    };
};

const mapDispatchToProps = {
    fetchCategory,
    updateCategory,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CategoryUpdate));

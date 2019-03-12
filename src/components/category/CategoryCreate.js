import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { createCategory, reset } from "../../actions/category/create";
import requireAuth from "../requireAuth";
import CategoryForm from "./CategoryForm";
import { ErrorAlert, Spinner } from "../misc";

class CategoryCreate extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.createCategory(formValues);
    };

    render() {
        const { created, isLoading, error } = this.props;

        if (created) {
            return <Redirect to={`/categories/${created}`} />;
        }

        return (
            <div>
                <h3 className="my-3 text-center">
                    Create a new category <Spinner isLoading={isLoading} />
                </h3>
                <CategoryForm
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
        isLoading: state.categories.isLoading,
        error: state.categories.error,
        created: state.categories.created
    };
};

const mapDispatchToProps = {
    createCategory,
    reset
};

export default requireAuth(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withRouter(CategoryCreate))
);

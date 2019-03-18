import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createCategory, reset } from "../../actions/category/create";
import CategoryForm from "./CategoryForm";
import ErrorAlert from "../misc/ErrorAlert";

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
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">Create a new category</h3>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryCreate);

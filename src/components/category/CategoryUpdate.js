import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { fetchCategory, updateCategory } from "../../actions/category";
import { reset } from "../../actions/category/update";
import requireAuth from "../requireAuth";
import CategoryForm from "./CategoryForm";
import { ErrorAlert, Spinner } from "../misc";

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
        const { category, updated, isLoading, error } = this.props;

        if (updated) {
            return <Redirect to={`/categories/${updated}`} />;
        }

        return (
            <div>
                <h3 className="my-3 text-center">
                    Update this category <Spinner isLoading={isLoading} />
                </h3>
                {category && (
                    <CategoryForm
                        initialValues={_.pick(category, "name")}
                        onSubmit={this.onSubmit}
                        isSubmitDisabled={isLoading}
                    />
                )}
                <ErrorAlert error={error} />
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

export default requireAuth(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withRouter(CategoryUpdate))
);

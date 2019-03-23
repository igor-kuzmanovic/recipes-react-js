import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchCategory, updateCategory } from "../../actions/category";
import CategoryForm from "./CategoryForm";
import ErrorAlert from "../misc/ErrorAlert";

class CategoryUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id);
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
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">Update this category</h3>
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
    updateCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryUpdate);

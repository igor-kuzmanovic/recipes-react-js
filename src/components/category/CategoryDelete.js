import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { deleteCategory, reset } from "../../actions/category/delete";
import requireAuth from "../requireAuth";
import { ConfirmButton, BackButton } from "../form";
import { ErrorAlert, Spinner } from "../misc";

class CategoryDelete extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onDeleteClick = () => {
        this.props.deleteCategory(this.props.match.params.id);
    };

    render() {
        const { deleted, isLoading, error } = this.props;

        if (deleted) {
            return <Redirect to="/categories" />;
        }

        return (
            <div>
                <h3 className="my-3 text-center">
                    Are you sure you want to delete this category?{" "}
                    <Spinner isLoading={isLoading} />
                </h3>
                <div className="row mb-3">
                    <div className="col text-left">
                        <BackButton link="/categories" />
                    </div>
                    <div className="col text-right">
                        <ConfirmButton
                            onClick={this.onDeleteClick}
                            disabled={isLoading}
                        />
                    </div>
                </div>
                <ErrorAlert error={error} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.categories.isLoading,
        error: state.categories.error,
        deleted: state.categories.deleted
    };
};

const mapDispatchToProps = {
    deleteCategory,
    reset
};

export default requireAuth(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withRouter(CategoryDelete))
);

import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { deleteRecipe, reset } from "../../actions/recipe/delete";
import requireAuth from "../requireAuth";
import { ConfirmButton, BackButton } from "../form";
import { ErrorAlert, Spinner } from "../misc";

class RecipeDelete extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onDeleteClick = () => {
        this.props.deleteRecipe(this.props.match.params.id);
    };

    render() {
        const { deleted, isLoading, error } = this.props;

        if (deleted) {
            return <Redirect to="/recipes" />;
        }

        return (
            <div>
                <h3 className="my-3 text-center">
                    Are you sure you want to delete this recipe?{" "}
                    <Spinner isLoading={isLoading} />
                </h3>
                <div className="row mb-3">
                    <div className="col text-left">
                        <BackButton link="/recipes" />
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
        isLoading: state.recipes.isLoading,
        error: state.recipes.error,
        deleted: state.recipes.deleted
    };
};

const mapDispatchToProps = {
    deleteRecipe,
    reset
};

export default requireAuth(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withRouter(RecipeDelete))
);

import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { deleteRecipe } from "../../actions/recipe/delete";
import { ConfirmButton, BackButton } from "../form";
import { ErrorAlert } from "../misc";

class RecipeDelete extends React.Component {
    onDeleteClick = () => {
        this.props.deleteRecipe(this.props.match.params.id);
    };

    render() {
        const { deleted, isLoading, error } = this.props;

        if (deleted) {
            return <Redirect to="/recipes" />;
        }

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">
                    Are you sure you want to delete this recipe?
                </h3>
                <div className="row mb-3 mt-5">
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
    deleteRecipe
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeDelete);

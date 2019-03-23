import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { deleteTag } from "../../actions/tag/delete";
import { ConfirmButton, BackButton } from "../form";
import { ErrorAlert } from "../misc";

class TagDelete extends React.Component {
    onDeleteClick = () => {
        this.props.deleteTag(this.props.match.params.id);
    };

    render() {
        const { deleted, isLoading, error } = this.props;

        if (deleted) {
            return <Redirect to="/tags" />;
        }

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">
                    Are you sure you want to delete this tag?
                </h3>
                <div className="row mb-3">
                    <div className="col text-left">
                        <BackButton link="/tags" />
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
        isLoading: state.tags.isLoading,
        error: state.tags.error,
        deleted: state.tags.deleted
    };
};

const mapDispatchToProps = {
    deleteTag
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagDelete);

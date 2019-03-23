import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createTag } from "../../actions/tag/create";
import TagForm from "./TagForm";
import ErrorAlert from "../misc/ErrorAlert";

class TagCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createTag(formValues);
    };

    render() {
        const { created, isLoading, error } = this.props;

        if (created) {
            return <Redirect to={`/tags/${created}`} />;
        }

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">Create a new tag</h3>
                <TagForm
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
        isLoading: state.tags.isLoading,
        error: state.tags.error,
        created: state.tags.created
    };
};

const mapDispatchToProps = {
    createTag
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagCreate);

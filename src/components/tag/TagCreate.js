import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createTag, reset } from "../../actions/tag/create";
import TagForm from "./TagForm";
import ErrorAlert from "../misc/ErrorAlert";

class TagCreate extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.createTag(formValues);
    };

    render() {
        const { created, isLoading, error } = this.props;

        if (created) {
            return <Redirect to={`/tags/${created}`} />;
        }

        return (
            <div>
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
    createTag,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagCreate);

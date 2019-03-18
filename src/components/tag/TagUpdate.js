import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchTag, updateTag } from "../../actions/tag";
import { reset } from "../../actions/tag/update";
import TagForm from "./TagForm";
import ErrorAlert from "../misc/ErrorAlert";

class TagUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchTag(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.updateTag(this.props.match.params.id, formValues);
    };

    render() {
        const { tag, updated, isLoading, error } = this.props;

        if (updated) {
            return <Redirect to={`/tags/${updated}`} />;
        }

        return (
            <div>
                <h3 className="my-3 text-center">Update this tag</h3>
                {tag && (
                    <TagForm
                        initialValues={_.pick(tag, "name")}
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
        isLoading: state.tags.isLoading,
        error: state.tags.error,
        tag: state.tags.items[ownProps.match.params.id],
        updated: state.tags.updated
    };
};

const mapDispatchToProps = {
    fetchTag,
    updateTag,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagUpdate);

import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchTag, updateTag } from "../../actions/tag";
import { reset } from "../../actions/tag/update";
import TagForm from "./TagForm";

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
        if (this.props.updated) {
            return <Redirect to={`/tags/${this.props.updated}`} />;
        }

        return (
            <div>
                <h3>
                    Update this tag{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                {this.props.tag && (
                    <TagForm
                        initialValues={_.pick(this.props.tag, "name")}
                        onSubmit={this.onSubmit}
                        isSubmitDisabled={this.props.isLoading}
                    />
                )}
                {this.props.error && (
                    <Alert variant="danger" dismissible className="mt-3">
                        <Alert.Heading>Error</Alert.Heading>
                        <p>{this.props.error}</p>
                    </Alert>
                )}
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
)(withRouter(TagUpdate));

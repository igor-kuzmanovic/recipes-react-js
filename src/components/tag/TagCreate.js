import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { createTag, reset } from "../../actions/tag/create";
import TagForm from "./TagForm";

class TagCreate extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.createTag(formValues);
    };

    render() {
        if (this.props.created) {
            return <Redirect to={`/tags/${this.props.created}`} />;
        }

        return (
            <div>
                <h3 className="my-3">
                    Create a new tag{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                <TagForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={this.props.isLoading}
                />
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
)(withRouter(TagCreate));

import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { deleteTag, reset } from "../../actions/tag/delete";

class TagDelete extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onDeleteClick = () => {
        this.props.deleteTag(this.props.match.params.id);
    };

    render() {
        if (this.props.deleted) {
            return <Redirect to="/tags" />;
        }

        return (
            <div>
                <h3>
                    Are you sure you want to delete this tag?{" "}
                    {this.props.isLoading && (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    )}
                </h3>
                <div className="row">
                    <div className="col text-left">
                        <LinkContainer to="/tags" activeClassName="">
                            <Button variant="secondary">Back to list</Button>
                        </LinkContainer>
                    </div>
                    <div className="col text-right">
                        <Button
                            onClick={this.onDeleteClick}
                            variant="danger"
                            disabled={this.props.isLoading}
                        >
                            Confirm
                        </Button>
                    </div>
                </div>
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
        deleted: state.tags.deleted
    };
};

const mapDispatchToProps = {
    deleteTag,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(TagDelete));

import React from "react";
import { connect } from "react-redux";
import { Button, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchTag, reset } from "../../actions/tag/show";

class TagShow extends React.Component {
    componentDidMount() {
        this.props.fetchTag(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        return (
            <div>
                {this.props.tag && (
                    <h3 className="my-3">
                        {this.props.tag.name}{" "}
                        {this.props.isLoading && (
                            <FontAwesomeIcon icon={faSpinner} spin />
                        )}
                    </h3>
                )}
                <LinkContainer to="/tags" activeClassName="">
                    <Button variant="secondary">Back to list</Button>
                </LinkContainer>
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
        tag: state.tags.items[ownProps.match.params.id]
    };
};

const mapDispatchToProps = {
    fetchTag,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagShow);

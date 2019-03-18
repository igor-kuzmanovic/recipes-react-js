import React from "react";
import { connect } from "react-redux";
import { ButtonGroup, ListGroup } from "react-bootstrap";
import { fetchTags, reset } from "../../actions/tag/list";
import {
    LinkButton,
    UpdateButton,
    DeleteButton,
    BackButton,
    CreateButton
} from "../form";
import { ErrorAlert, Spinner } from "../misc";

class TagList extends React.Component {
    componentDidMount() {
        this.props.fetchTags();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    renderList() {
        return this.props.tags.map(tag => {
            const { id, name } = tag;
            return (
                <ListGroup.Item key={id}>
                    <ButtonGroup className="d-flex justify-content-between">
                        <LinkButton link={`/tags/${id}`}>{name}</LinkButton>
                        <UpdateButton link={`/tags/update/${id}`} />
                        <DeleteButton link={`/tags/delete/${id}`} />
                    </ButtonGroup>
                </ListGroup.Item>
            );
        });
    }

    render() {
        const { isLoading, error } = this.props;

        return (
            <div>
                <h3 className="my-3 text-center">Tags</h3>
                <ListGroup className="mb-3">
                    {this.renderList()}
                    {isLoading && (
                        <ListGroup.Item>
                            <Spinner isLoading={isLoading} />
                        </ListGroup.Item>
                    )}
                </ListGroup>
                <div className="row mb-3">
                    <div className="col text-left">
                        <BackButton link="/" />
                    </div>
                    <div className="col text-right">
                        <CreateButton link="/tags/create" />
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
        tags: Object.values(state.tags.items)
    };
};

const mapDispatchToProps = {
    fetchTags,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagList);

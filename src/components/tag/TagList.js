import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonGroup, Table } from "react-bootstrap";
import { fetchTags, reset } from "../../actions/tag/list";
import { UpdateButton, DeleteButton, BackButton, CreateButton } from "../form";
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
                <tr key={id}>
                    <td className="w-100">
                        <Link to={`/tags/${id}`}>{name}</Link>
                    </td>
                    <td className="p-0">
                        <ButtonGroup>
                            <UpdateButton link={`/tags/update/${id}`} />
                            <DeleteButton link={`/tags/delete/${id}`} />
                        </ButtonGroup>
                    </td>
                </tr>
            );
        });
    }

    render() {
        const { isLoading, error } = this.props;

        return (
            <div>
                <h3 className="my-3 text-center">Tags</h3>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>{null}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                        {isLoading && (
                            <tr>
                                <td colSpan="2">
                                    <Spinner isLoading={isLoading} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
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

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchTags, deleteTag } from '../../actions/tag';

class TagList extends React.Component {
    componentDidMount() {
        this.props.fetchTags();
    }

    onDeleteClick(id) {
        if (window.confirm('Are you sure you want to delete this Tag?')) {
            this.props.deleteTag(id)
        }
    }

    renderList() {
        return this.props.tags.map(tag => {
            const { id, name } = tag;
            return (
                <tr key={id}>
                    <td className="w-100">
                        <Link to={`/tags/${id}`}>
                            {name}
                        </Link>
                    </td>
                    <td>
                        <ButtonGroup>
                            <LinkContainer to={`/tags/update/${id}`}>
                                <Button variant="primary" size="small">Update</Button>
                            </LinkContainer>
                            <Button onClick={() => this.onDeleteClick(id)} variant="danger" size="small">Delete</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            )
        })
    }

    renderCreate() {
        return (
            <LinkContainer to={`/tags/create`}>
                <Button variant="primary">Create Tag</Button>
            </LinkContainer>
        )
    }

    render() {
        return (
            <div>
                <h2>Tags</h2>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>{null}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </Table>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tags: Object.values(state.tags)
    }
};

const mapDispatchToProps = {
    fetchTags,
    deleteTag
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagList);
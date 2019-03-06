import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { deleteCategory } from '../../actions/category/delete';

class CategoryDelete extends React.Component {
    onDeleteClick(id) {
        this.props.deleteCategory(id)
    }

    render() {
        return (
            <div>
                {this.props.loading && (
                    <p>Loading...</p>
                )}
                {this.props.error && (
                    <p>{this.props.error}</p>
                )}
                <h2>Are you sure you want to delete this category?</h2>
                <Button onClick={() => this.onDeleteClick(this.props.match.params.id)} variant="danger">
                    Delete
                </Button>
                <LinkContainer to=".">
                    <Button variant="primary">Back to list</Button>
                </LinkContainer>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        loading: state.categories.show.loading,
        error: state.categories.show.error
    }
};

const mapDispatchToProps = {
    deleteCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryDelete);
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { deleteCategory } from '../../actions/category';

class CategoryDelete extends React.Component {
    onDeleteClick(id) {
        this.props.deleteCategory(id)
    }

    render() {
        <div>
            {this.props.loading && (
                <p>Loading...</p>
            )}
            {this.props.error && (
                <p>{this.props.error}</p>
            )}
            <h2>Are you sure you want to delete this category?</h2>
            <Button onClick={() => this.onDeleteClick(ownProps.match.params.id)} variant="danger">
                Delete
            </Button>
            <LinkContainer to=".">
                <Button variant="primary">Back to list</Button>
            </LinkContainer>
        </div>
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.categories.show.loading,
        error: stat.categories.error
    }
};

const mapDispatchToProps = {
    deleteCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryDelete);
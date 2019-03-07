import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchCategory, deleteCategory } from '../../actions/category';
import { reset } from '../../acctions/category/delete';

class CategoryDelete extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.reset();
    }

    onDeleteClick = () => {
        this.props.deleteCategory(this.props.category.id);
        this.props.history.push('/categories');
    };

    render() {
        return (
            <div>
                {this.props.category && (
                    <h2>Are you sure you want to delete '{this.props.category.name}'?</h2>
                )}
                {this.props.isLoading && (
                    <p>Loading...</p>
                )}
                {this.props.error && (
                    <p>{this.props.error}</p>
                )}
                <LinkContainer to="..">
                    <Button variant="primary">Back to list</Button>
                </LinkContainer>
                <Button onClick={this.onDeleteClick} variant="danger">
                    Delete
                </Button>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.categories.isLoading,
        error: state.categories.error,
        category: state.categories.items[ownProps.match.params.id],
    }
};

const mapDispatchToProps = {
    fetchCategory,
    deleteCategory,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CategoryDelete));
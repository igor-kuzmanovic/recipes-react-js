import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchCategory, deleteCategory } from '../../actions/category';

class CategoryDelete extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id)
    }

    onDeleteClick = () => {
        this.props.deleteCategory(this.props.category.id);
        this.props.history.push('/categories');
    };

    renderLoading() {
        if (this.props.isLoading) {
            return <p>Loading...</p>
        }
    }

    renderErrors() {
        if (this.props.errors.length) {
            return <p>{this.props.errors}</p>
        }
    }

    render() {
        return (
            <div>
                {this.props.category && (
                    <h2>Are you sure you want to delete '{this.props.category.name}'?</h2>
                )}
                {this.renderLoading()}
                {this.renderErrors()}
                <LinkContainer to="..">
                    <Button variant="primary">Back to list</Button>
                </LinkContainer>
                {this.props.category && (
                    <Button onClick={this.onDeleteClick} variant="danger">
                        Delete
                    </Button>
                )}
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.categories.isLoading,
        errors: Object.values(state.categories.errors),
        category: state.categories.items[ownProps.match.params.id],
    }
};

const mapDispatchToProps = {
    fetchCategory,
    deleteCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CategoryDelete));
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { createCategory, reset } from '../../actions/category/create';
import CategoryForm from './CategoryForm';

class CategoryCreate extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.createCategory(formValues);
        this.props.history.push('/categories');
    };

    render() {
        return (
            <div>
                <h3>Create a new Category</h3>
                {this.props.isLoading && (
                    <p>Loading...</p>
                )}
                {this.props.error && (
                    <p>{this.props.error}</p>
                )}
                <CategoryForm onSubmit={this.onSubmit} />
                <LinkContainer to=".">
                    <Button variant="primary">Back to list</Button>
                </LinkContainer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.categories.isLoading,
        error: state.categories.error
    }
}

const mapDispatchToProps = {
    createCategory,
    reset
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CategoryCreate));
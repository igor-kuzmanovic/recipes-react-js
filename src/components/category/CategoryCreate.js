import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { createCategory } from '../../actions/category/create';
import CategoryForm from './CategoryForm';

class CategoryCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createCategory(formValues);
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
                <h3>Create a new Category</h3>
                {this.renderLoading()}
                <CategoryForm onSubmit={this.onSubmit} />
                {this.renderErrors()}
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
        errors: Object.values(state.categories.errors)
    }
}

const mapDispatchToProps = {
    createCategory
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CategoryCreate));
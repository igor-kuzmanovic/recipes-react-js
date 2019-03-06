import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { createCategory } from '../../actions/category/create';
import CategoryForm from './CategoryForm';

class CategoryCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createCategory(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a Category</h3>
                {this.props.loading && (
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
        loading: state.categories.create.loading,
        error: state.categories.create.error
    }
}

const mapDispatchToProps = {
    createCategory
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryCreate);
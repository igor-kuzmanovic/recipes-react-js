import React from 'react';
import { connect } from 'react-redux';
import { createCategory } from '../../actions/category';
import CategoryForm from './CategoryForm';

class CategoryCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createCategory(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a Category</h3>
                <CategoryForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(
    null,
    { createCategory }
)(CategoryCreate);
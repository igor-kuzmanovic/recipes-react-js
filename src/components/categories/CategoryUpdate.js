import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCategory, updateCategory } from '../../actions/category';
import CategoryForm from "./CategoryForm";

class CategoryUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.updateCategory(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.category) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Update a Category</h3>
                <CategoryForm initialValues={_.pick(this.props.category, 'name')} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        category: state.categories[ownProps.match.params.id]
    };
};

const mapDispatchToProps = {
    fetchCategory,
    updateCategory
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryUpdate);